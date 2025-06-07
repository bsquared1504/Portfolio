document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchButton");
  const searchBox = document.getElementById("searchBox");

  if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", () => {
      searchBox.classList.add("visible");
      searchBox.focus();
    });

     // Hide the search box when it loses focus
    searchBox.addEventListener("blur", () => {
      searchBox.classList.remove("visible");
    });
  }
});
