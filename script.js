document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  const windowContainer = document.querySelector(".window-container");
  const windowImage = windowContainer.querySelector(".window-image");
  const button = windowContainer.querySelector(".close-button");

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

/*
in the document, an event listener is added when the DOM content is fully loaded.

Once the event of the DOM being loaded happens and is listened to, then a function is invoked. Inside the function, 
const variables were created to select elements from the HTML. const images selects and creates a 
NodeList of all elements with a class of "gallery-image". 
const windowImage selects the first element that has the class "window-image".  
const windowContainer selects the first element that has the class "window-container".  
const button selects the first element that has the class "close-button".
on line 7, a for loop with the function (img) is used to loop through the images in the NodeList and
add a click event listener to each image. Once the event listener listens a click then the
function is applied. The function will add the class "open" to the windowContainer when an img is 
clicked thus opening the new window on the dom. After that, the windowImage will be put in the HTML
by accessing to the img src through the execution context "this". This refers to what is inside the 
function and calls the dataset imageurl found in the html. In this way, once the user clicks on an
image and the event listener hears it, it will invoke a function that will make a pop-up window with
the image clicked. 
on line 14, another event is listened when the button is clicked. The function will remove the class
"open" from the windowContainer thus closing the popup window in the DOM when the button is clicked.
The entire script will run and attach event listeners to the images and the button after the DOM has 
finished loading.
*/
