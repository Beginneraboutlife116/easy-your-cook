const iframe = document.querySelector(".iframe");
const iframeTooltip = document.querySelector(".iframe__tooltip");

iframe.addEventListener("mouseenter", () => {
  iframeTooltip.style.opacity = "1";
});

iframe.addEventListener("mouseleave", () => {
  iframeTooltip.style.opacity = "0";
});
