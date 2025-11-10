// Mobile menu functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");

mobileMenuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("max-h-0");

  if (isOpen) {
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-96", "opacity-100");
    menuOpenIcon.classList.add("hidden");
    menuCloseIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.remove("max-h-96", "opacity-100");
    mobileMenu.classList.add("max-h-0", "opacity-0");
    menuOpenIcon.classList.remove("hidden");
    menuCloseIcon.classList.add("hidden");
  }
});

// Dark/Light mode toggle functionality
const themeToggleBtns = document.querySelectorAll(
  "#theme-toggle, #theme-toggle-mobile"
);
const themeToggleDarkIcons = document.querySelectorAll(
  "#theme-toggle-dark-icon, #theme-toggle-dark-icon-mobile"
);
const themeToggleLightIcons = document.querySelectorAll(
  "#theme-toggle-light-icon, #theme-toggle-light-icon-mobile"
);

// Check for saved theme preference or respect OS preference
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeToggleLightIcons.forEach((icon) => icon.classList.remove("hidden"));
} else {
  document.documentElement.classList.remove("dark");
  themeToggleDarkIcons.forEach((icon) => icon.classList.remove("hidden"));
}

// Toggle theme function
function toggleTheme() {
  // Toggle icons
  themeToggleDarkIcons.forEach((icon) => icon.classList.toggle("hidden"));
  themeToggleLightIcons.forEach((icon) => icon.classList.toggle("hidden"));

  // Toggle theme
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
}

// Add event listeners to both toggle buttons
themeToggleBtns.forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});
