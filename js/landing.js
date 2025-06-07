document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchButton");
  const searchBox = document.getElementById("searchBox");

  if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", () => {
      searchBox.classList.toggle("visible");

      if (searchBox.classList.contains("visible")) {
        searchBox.focus();
        searchBtn.classList.add("disabled"); // Disable button
      } else {
        searchBtn.classList.remove("disabled"); // Re-enable if closed
      }
    });

    // Optional: re-enable if user clicks out and box closes
    searchBox.addEventListener("blur", () => {
      searchBox.classList.remove("visible");
      searchBtn.classList.remove("disabled");
    });
  }
});
