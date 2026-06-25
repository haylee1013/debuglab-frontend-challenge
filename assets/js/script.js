const body = document.body;
const menuButton = document.querySelector("[data-menu-open]");
const closeButton = document.querySelector("[data-menu-close]");
const overlay = document.querySelector("[data-menu-overlay]");
const drawerLinks = document.querySelectorAll(".mobile-drawer a");
const drawerToggles = document.querySelectorAll("[data-drawer-toggle]");

function setDrawer(open) {
  body.classList.toggle("drawer-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
}

menuButton?.addEventListener("click", () => setDrawer(true));
closeButton?.addEventListener("click", () => setDrawer(false));
overlay?.addEventListener("click", () => setDrawer(false));

drawerLinks.forEach((link) => {
  link.addEventListener("click", () => setDrawer(false));
});

drawerToggles.forEach((toggle) => {
  const targetId = toggle.getAttribute("aria-controls");
  const target = targetId ? document.getElementById(targetId) : null;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    target?.classList.toggle("is-open", !isOpen);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setDrawer(false);
  }
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".desktop-nav a[href], .drawer-nav a[href], .footer-list a[href]").forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll(".drawer-submenu").forEach((submenu) => {
  if (submenu.querySelector("[aria-current='page']")) {
    const toggle = document.querySelector(`[aria-controls="${submenu.id}"]`);
    toggle?.setAttribute("aria-expanded", "true");
    submenu.classList.add("is-open");
  }
});
