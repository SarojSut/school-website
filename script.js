let form = document.querySelector("form");

function loginClicked(form){
    if(form.checkValidity()){
        alert("User Logged in");
    }
}

function validityAlert(form){
    if(form.checkValidity()){
        alert("Submitted Successfully");
    }
}

function newsLetterForm(form){
    if(form.checkValidity()){
        alert("Request Submitted");
    }
}

// ------------       hamburger        --------------------

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

