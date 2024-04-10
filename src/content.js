const iframe = document.getElementById("iframeScorm");
const BUTTON = document.createElement("button");
BUTTON.className = "button-open-new-tab";
BUTTON.textContent = "Abrir a view do curso em nova aba";


if (iframe) {
  BUTTON.addEventListener("click", () => {
    const iframeSrc = iframe.src;
    window.open(iframeSrc, "noopener noreferrer");
  });
  document.body.appendChild(BUTTON);
}


// listener : src/background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "openPopup") {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);

    const button = document.getElementById("btn-open-course");
    if (button) {
      button.focus();
    }
  }
});
