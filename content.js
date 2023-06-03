(function mizaru() {
  let vidsContainer = document.querySelector(
    "ytd-two-column-browse-results-renderer[page-subtype='home']"
  );
  vidsContainer.innerHTML =
    "<p style='color: #fff; font-size: 48px; text-align: center'>🙈</p>";
  vidsContainer.style.height = "calc(100vh - 72px)";
  vidsContainer.style.justifyContent = "center";
  vidsContainer.style.alignItems = "center";

  let shorts = document.querySelectorAll("a[title='Shorts']");
  shorts.forEach((shortLink) => (shortLink.style.display = "none"));
})();
