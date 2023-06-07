window.addEventListener("load", function () {
  // Run script 500ms after other scripts finish running
  setTimeout(mainScript, 500);
});

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    initLoader();
  }
});

function initLoader() {
  // CSS rules added early to hide the videos before they are even displayed
  let style = document.createElement("style");
  style.id = "mizaru-style";

  style.innerHTML = `
    ytd-two-column-browse-results-renderer[page-subtype='home'] {
      display: none;
    }

    [aria-label='Shorts'], a[title="Shorts"] { 
      display: none !important;
    }

    .fade-in {
      opacity: 1;
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 1s;
    }
    
    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

function mainScript() {
  if (window.location.href != "https://www.youtube.com/") return;

  let vidsContainer;

  do {
    vidsContainer = document.querySelector(
      "ytd-two-column-browse-results-renderer[page-subtype='home']"
    );
  } while (!vidsContainer);

  vidsContainer.innerHTML =
    "<p style='color: #fff; font-size: 48px; text-align: center;' class='fade-in'>🙈</p>";

  vidsContainer.style.display = "flex";
  vidsContainer.style.height = "calc(100vh - 72px)";
  vidsContainer.style.justifyContent = "center";
  vidsContainer.style.alignItems = "center";
}
