var browser = document.getElementById("browser");
var app = document.getElementById("app");
var modal_open = document.getElementById("modal_open")
var modal_close = document.getElementById("modal_close");
var modal = document.getElementById("modal");
var modal_next = document.getElementById("modal_next");
var modal_done = document.getElementById("modal_done");
var modal_step = document.getElementById("modal_step").innerHTML;
var modal_q = document.getElementById("modal_q").innerHTML;
var modal_img = document.getElementById("modal_img").innerHTML;


//https://developer.mozilla.org/en-US/docs/Web/API/Navigator

if(window.navigator.standalone){8
    console.log('yes')
    browser.style.display = "none";
    app.style.display = "block";
}
else{
    console.log('no')
    browser.style.display = "block"; //block
    app.style.display = "none";  //none
}

// MODAL -- https://www.w3schools.com/howto/howto_css_modals.asp

// When the user clicks on the button, open the modal
  modal_open.onclick = function() {
    modal.style.display = "block";
    modal_step = "Step 1";
    document.getElementById("modal_step").innerHTML = "Step 1";
    document.getElementById("modal_q").innerHTML = "Is your box damaged?"
    document.getElementById("modal_next").innerHTML = "no";
    document.getElementById("modal_done").innerHTML = "yes";
    console.log(modal_step)
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



// UPDATE STEPS CONTENT -- https://www.w3schools.com/js/js_htmldom_html.asp
modal_next.addEventListener('click', event =>{
    handleNext(event);
});

//LOOP
function handleNext(){
    if(modal_step==='Step 1'){
        modal_step = "Step 2";
        document.getElementById("modal_step").innerHTML = "Step 2";
        document.getElementById("modal_q").innerHTML = "Have you collapsed your box?"
        document.getElementById("modal_next").innerHTML = "yes";
        document.getElementById("modal_done").innerHTML = "no";
        document.getElementById("modal_img").src = "images/box_collapsed.png";
        console.log(modal_step);
    }
    else if(modal_step==='Step 2'){
        modal_step = "Step 3";
        document.getElementById("modal_step").innerHTML = "Step 3";
        document.getElementById("modal_q").innerHTML = "Have you found your drop box location?"
        document.getElementById("modal_next").innerHTML = "yes";
        document.getElementById("modal_done").innerHTML = "no";
        document.getElementById("modal_img").src = "images/mailbox.png";
        console.log(modal_step);
    }
    else if(modal_step==='Step 3'){
      modal_step = "Done";
      document.getElementById("modal_step").innerHTML = "Done";
      document.getElementById("modal_q").innerHTML = "Your box is ready to be returned!"
      document.getElementById("modal_next").innerHTML = "Next Box"
      document.getElementById("modal_done").innerHTML = "Done";
      document.getElementById("modal_img").src = "images/box_check.png";
      console.log(modal_step);
    }
    else if(modal_step==='Done'){
      modal_step = "Step 1";
      document.getElementById("modal_step").innerHTML = "Step 1";
      document.getElementById("modal_q").innerHTML = "Is your box damaged?"
      document.getElementById("modal_next").innerHTML = "no";
      document.getElementById("modal_done").innerHTML = "yes";
      document.getElementById("modal_img").src = "images/box_dirty.png";
      console.log(modal_step);
    }
  }


// NO BUTTON
modal_done.addEventListener('click', event =>{
  handleDone(event);
});

function handleDone(){
  do{
    if(modal_step==='Step 1'){
        modal_step = "Done";
        document.getElementById("modal_step").innerHTML = "Sorry,";
        document.getElementById("modal_q").innerHTML = "Your box is not fit for return. Instead, please recycle your cardboard!"
        document.getElementById("modal_next").innerHTML = "Next Box";
        document.getElementById("modal_done").innerHTML = "Done";
        console.log(modal_step);
    }
    else if(modal_step==='Step 2'){
      modal_step = "Done";
      document.getElementById("modal_step").innerHTML = "Before Returning,";
      document.getElementById("modal_q").innerHTML = "please collapse and fold your box."
      document.getElementById("modal_next").innerHTML = "It's Collapsed";
      document.getElementById("modal_done").innerHTML = "Done";
      console.log(modal_step);
  }
  else if(modal_step==='Step 3'){
    modal_step = "Done";
    document.getElementById("modal_step").innerHTML = "Find your location!";
    document.getElementById("modal_q").innerHTML = "Soon, a map will be available to help you find your local drop box."
    document.getElementById("modal_next").innerHTML = "Next Box";
    document.getElementById("modal_done").innerHTML = "Done";
    console.log(modal_step);
}
    else if(modal_step==='Done'){
        modal.style.display = "none";
    }
  }
    while(modal_step==='Step 1');
}
