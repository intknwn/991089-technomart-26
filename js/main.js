var mapLink = document.querySelector(".show-map-popup");
var mapPopUp = document.querySelector(".map-popup");
var mapCloseBtn = document.querySelector(".map-popup-close");

var contactButton = document.querySelector(".show-contact-form");
var contactPopUp = document.querySelector(".contact-us-popup");
var contactCloseBtn = document.querySelector(".contact-us-popup-close");

var form = contactPopUp.querySelector(".contact-form");

var username = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");

var cartLink = document.querySelector(".cart");
var bookmarksLink = document.querySelector(".bookmarks");
var addToCartLinks = document.getElementsByClassName("add-to-cart");
var addToBookmarksLinks = document.getElementsByClassName("add-to-bookmarks");
var items = 0;
var bookmarks = 0;

for (var i = 0; i < addToCartLinks.length; i++) {
  (function (i) {
    addToCartLinks[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      cartLink.classList.add("cart-not-empty");
      items++;
     })
  })(i);
}

for (var i = 0; i < addToBookmarksLinks.length; i++) {
  (function (i) {
    addToBookmarksLinks[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      bookmarksLink.classList.add("bookmarks-not-empty");
     })
  })(i);
}

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopUp.classList.add("popup-show");
});

mapCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopUp.classList.remove("popup-show");
});

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopUp.classList.add("popup-show");
  username.focus();
});

contactCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopUp.classList.remove("popup-show");
  contactPopUp.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля формы!");
    contactPopUp.classList.add("popup-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactPopUp.classList.contains("popup-show")) {
      contactPopUp.classList.remove("popup-show");
      contactPopUp.classList.remove("popup-error");
    }

    if (mapPopUp.classList.contains("popup-show")) {
      mapPopUp.classList.remove("popup-show");
    }
  }
});

