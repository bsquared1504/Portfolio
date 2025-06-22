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

  const headerDiv = document.getElementById("headerDiv");

  function updateHeaderBackground() {
    if (window.scrollY === 0) {
      headerDiv.classList.add("top");
      headerDiv.classList.remove("scrolled");
    } else {
      headerDiv.classList.add("scrolled");
      headerDiv.classList.remove("top");
    }
  }

  // On load and on scroll
  updateHeaderBackground();
  window.addEventListener("scroll", updateHeaderBackground);


  document.querySelectorAll('.swiper-container').forEach((row, index) => {
    const nextBtn = row.querySelector('.swiper-button-next');
    const prevBtn = row.querySelector('.swiper-button-prev');
    clicked = false;

    const swiper = new Swiper(row, {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
      speed: 800,
      loop: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });

    prevBtn.classList.add("disabled");

    nextBtn.addEventListener("click", () => {
      prevBtn.classList.remove("disabled");
    });

  });
  
  document.querySelectorAll('.swiper-slide').forEach((slide => {

    slide.addEventListener("mouseenter", function () {
      this.classList.add("focus");
    });

    slide.addEventListener("mouseleave", function () {
      this.classList.remove("focus");
    });
  }));

});
