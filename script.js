document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  const windowImage = document.querySelector(".window-image");
  const windowContainer = document.querySelector(".window-container");
  const button = document.querySelector(".close-button");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      windowContainer.classList.add("open");
      windowImage.innerHTML = `<img src="${this.dataset.imageurl}"/>`;
    });
  });

  button.addEventListener("click", function () {
    windowContainer.classList.remove("open");
  });
});
