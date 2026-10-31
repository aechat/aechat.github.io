export const isHttpLink = (href: string): boolean => /^https?:\/\//i.test(href);

export const getFileNameFromHref = (href: string, fallback = "file"): string =>
  decodeURIComponent(href.split("#", 1)[0].split("?", 1)[0].split("/").pop() || fallback);

export const isGithubRawFromRepository = (
  href: string,
  owner: string,
  repository: string
): boolean => {
  try {
    const url = new URL(href);

    const path = url.pathname.toLowerCase();

    const parts = path.split("/").filter(Boolean);

    const [urlOwner, urlRepository] = parts;

    return (
      url.hostname === "github.com" &&
      urlOwner === owner.toLowerCase() &&
      urlRepository === repository.toLowerCase() &&
      path.includes("/raw/")
    );
  } catch {
    return false;
  }
};
