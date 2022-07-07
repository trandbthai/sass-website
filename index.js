function changeHeader() {
  document
    .getElementById("header")
    .classList.toggle("scrolling-header", window.scrollY > 0);
}

window.onscroll = changeHeader;

//At the document ready event
$(function () {
  new WOW().init();
});

//also at the window load event
$(window).on("load", function () {
  new WOW().init();
});

function submit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (!name || !email) {
    document.getElementById("span-name").innerHTML = "The field is required.";
    document.getElementById("span-email").innerHTML = "The field is required.";
    document.getElementById("error-mess").style.display = "block";
  }
}
