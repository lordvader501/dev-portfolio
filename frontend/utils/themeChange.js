export function getTheme() {
  if (import.meta.client) {
    return localStorage.getItem("theme") || "light";
  }
}
