const iframe = document.querySelector(".iframe");
const iframeTooltip = document.querySelector(".iframe__tooltip");
const dropdownBtn = document.querySelector("[data-bs-toggle='dropdown']");
const dropdown = document.querySelector(".dropdown");

iframe.addEventListener("mouseenter", () => {
  iframeTooltip.style.opacity = "1";
});

iframe.addEventListener("mouseleave", () => {
  iframeTooltip.style.opacity = "0";
});

dropdown.addEventListener("hide.bs.dropdown", () => {
  dropdownBtn.classList.remove(
    "bg-light",
    "border",
    "border-primary-500",
    "text-primary-800"
  );
});

dropdown.addEventListener("show.bs.dropdown", () => {
  dropdownBtn.classList.add(
    "bg-light",
    "border",
    "border-primary-500",
    "text-primary-800"
  );
});
