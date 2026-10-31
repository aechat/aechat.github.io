import React, {useEffect} from "react";

import {
  COMBINED_GROUP_SELECTOR,
  updateAllGroupCorners,
  updateGroupCornersInRoot,
} from "./groupedCornersUtilities";

type GroupedCornersManagerProperties = {
  pathKey: string;
};

const TRACKED_GROUP_ATTRIBUTES = new Set(["class", "disabled", "aria-pressed"]);

const handleAttributeMutation = (
  mutation: MutationRecord,
  pendingRoots: Set<ParentNode>
) => {
  const {attributeName, target} = mutation;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (attributeName === "open") {
    if (target instanceof HTMLDetailsElement && target.open) {
      pendingRoots.add(target);
    }

    return;
  }

  if (target.className.includes("change-os-content")) {
    pendingRoots.add(target);

    return;
  }

  if (!attributeName || !TRACKED_GROUP_ATTRIBUTES.has(attributeName)) {
    return;
  }

  const group = target.closest<HTMLElement>(COMBINED_GROUP_SELECTOR);

  if (group) {
    pendingRoots.add(group);
  }
};

const handleAddedNode = (
  node: Node,
  pendingRoots: Set<ParentNode>,
  resizeObserver?: ResizeObserver
) => {
  if (!(node instanceof HTMLElement)) {
    return;
  }

  if (node.matches(COMBINED_GROUP_SELECTOR)) {
    resizeObserver?.observe(node);
    pendingRoots.add(node);

    return;
  }

  const nestedGroups = node.querySelectorAll<HTMLElement>(COMBINED_GROUP_SELECTOR);

  if (nestedGroups.length === 0) {
    return;
  }

  for (const group of nestedGroups) {
    resizeObserver?.observe(group);
  }

  pendingRoots.add(node);
};

const handleChildListMutation = (
  mutation: MutationRecord,
  pendingRoots: Set<ParentNode>,
  resizeObserver?: ResizeObserver
) => {
  const {addedNodes, target} = mutation;

  if (target instanceof HTMLElement) {
    const enclosingGroup = target.closest<HTMLElement>(COMBINED_GROUP_SELECTOR);

    if (enclosingGroup) {
      pendingRoots.add(enclosingGroup);
    }
  }

  for (const addedNode of addedNodes) {
    handleAddedNode(addedNode, pendingRoots, resizeObserver);
  }
};

const GroupedCornersManager = ({pathKey}: GroupedCornersManagerProperties) => {
  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    let rafId: number | undefined;

    const pendingRoots = new Set<ParentNode>();

    const flushPendingUpdates = () => {
      if (rafId !== undefined) {
        return;
      }

      rafId = requestAnimationFrame(() => {
        rafId = undefined;

        if (pendingRoots.has(document)) {
          pendingRoots.clear();
          updateAllGroupCorners();

          return;
        }

        const rootsToUpdate = [...pendingRoots];

        pendingRoots.clear();

        for (const root of rootsToUpdate) {
          updateGroupCornersInRoot(root);
        }
      });
    };

    const scheduleFullUpdate = () => {
      pendingRoots.add(document);
      flushPendingUpdates();
    };

    scheduleFullUpdate();
    window.addEventListener("resize", scheduleFullUpdate);

    const resizeObserver =
      "ResizeObserver" in globalThis
        ? new ResizeObserver((entries) => {
            for (const entry of entries) {
              if (entry.target instanceof HTMLElement) {
                pendingRoots.add(entry.target);
              }
            }

            if (pendingRoots.size > 0) {
              flushPendingUpdates();
            }
          })
        : undefined;

    if (resizeObserver) {
      const groups = document.querySelectorAll<HTMLElement>(COMBINED_GROUP_SELECTOR);

      for (const group of groups) {
        resizeObserver.observe(group);
      }
    }

    const mutationObserver = new MutationObserver((mutations) => {
      const previousSize = pendingRoots.size;

      for (const mutation of mutations) {
        if (mutation.type === "attributes") {
          handleAttributeMutation(mutation, pendingRoots);
        } else if (mutation.type === "childList") {
          handleChildListMutation(mutation, pendingRoots, resizeObserver);
        }
      }

      if (pendingRoots.size > previousSize) {
        flushPendingUpdates();
      }
    });

    mutationObserver.observe(document.body, {
      attributeFilter: ["open", "class", "style", "disabled", "aria-pressed"],
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      pendingRoots.clear();
      window.removeEventListener("resize", scheduleFullUpdate);
      resizeObserver?.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathKey]);

  return <></>;
};

export default GroupedCornersManager;
