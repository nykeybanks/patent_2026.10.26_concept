import icons from "./apps";

var { taskbar, desktop, pinned, recent } = {
  taskbar: (localStorage.getItem("taskbar") &&
    JSON.parse(localStorage.getItem("taskbar"))) || [
    "Settings",
    "File Explorer",
    "Browser",
    "Store",
    "Spotify",
  ],
  desktop: (localStorage.getItem("desktop") &&
    JSON.parse(localStorage.getItem("desktop"))) || [
    "Concept files",
    "Unescape",
    "Recycle Bin",
    "File Explorer",
    "Store",
    "Browser",
    "Github",
    "Spotify",
  ],
  pinned: (localStorage.getItem("pinned") &&
    JSON.parse(localStorage.getItem("pinned"))) || [
    "Browser",
    "Get Started",
    "Task Manager",
    "Contact upstream author",
    "Settings",
    "Store",
    "Unescape",
    "Notepad",
    "Whiteboard",
    "Calculator",
    "Spotify",
    "Upstream Twitter",
    "File Explorer",
    "Terminal",
    "Github",
    "Discord",
    "Camera",
  ],
  recent: (localStorage.getItem("recent") &&
    JSON.parse(localStorage.getItem("recent"))) || [
    "Contact upstream author",
    "Upstream Twitter",
    "Terminal",
    "Github",
    "File Explorer",
    "Spotify",
    "Edge",
  ],
};

// Preserve saved launcher selections when their visible labels change.
const legacyNames = {
  Blue: "Concept files",
  "Buy me a coffee": "Support Win11React",
  Mail: "Contact upstream author",
  Twitter: "Upstream Twitter",
  Pinterest: "Upstream Pinterest",
};
[taskbar, desktop, pinned, recent] = [taskbar, desktop, pinned, recent].map(
  (names) => names.map((name) => legacyNames[name] || name),
);

export const taskApps = icons.filter((x) => taskbar.includes(x.name));

export const desktopApps = icons
  .filter((x) => desktop.includes(x.name))
  .sort((a, b) => {
    return desktop.indexOf(a.name) > desktop.indexOf(b.name) ? 1 : -1;
  });

export const pinnedApps = icons
  .filter((x) => pinned.includes(x.name))
  .sort((a, b) => {
    return pinned.indexOf(a.name) > pinned.indexOf(b.name) ? 1 : -1;
  });

export const recentApps = icons
  .filter((x) => recent.includes(x.name))
  .sort((a, b) => {
    return recent.indexOf(a.name) > recent.indexOf(b.name) ? 1 : -1;
  });

export const allApps = icons.filter((app) => {
  return app.type === "app";
});

export const dfApps = {
  taskbar,
  desktop,
  pinned,
  recent,
};
