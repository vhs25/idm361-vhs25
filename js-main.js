var browser = document.getElementById("browser");
var app = document.getElementById("app");
var modal_open = document.getElementById("modal_open")
var modal_close = document.getElementById("modal_close");
var modal = document.getElementById("modal");
var modal_next = document.getElementById("modal_next");
var modal_done = document.getElementById("modal_done");
var modal_step = document.getElementById("modal_step");
var modal_q = document.getElementById("modal_q");


//https://developer.mozilla.org/en-US/docs/Web/API/Navigator

if(Navigator.standalone){
    console.log('yes')
    browser.style.display = "block";
    app.style.display = "none";
}
else{
    console.log('no')
    browser.style.display = "none";
    app.style.display = "block";
}

// MODAL -- https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks on the button, open the modal
  modal_open.onclick = function() {
    modal.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
  modal_close.onclick = function() {
    modal.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it !! NOT WORKING !!
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

