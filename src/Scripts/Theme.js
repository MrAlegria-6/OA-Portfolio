// src/scripts/theme.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#theme-toggle");
  const html = document.documentElement;

  // Cargar preferencia previa
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Guardar preferencia
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
