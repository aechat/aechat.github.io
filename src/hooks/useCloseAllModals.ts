import {useEffect} from "react";

export const useCloseAllModals = (onClose: () => void) => {
  useEffect(() => {
    const handleCloseAll = () => {
      onClose();
    };

    globalThis.window?.addEventListener("close-all-modals", handleCloseAll);

    return () => {
      globalThis.window?.removeEventListener("close-all-modals", handleCloseAll);
    };
  }, [onClose]);
};
