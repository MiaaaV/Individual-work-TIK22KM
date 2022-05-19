let textBox = document.getElementById("cta-text-box");
let container = document.getElementById("rest-container");
/* FUNCTION FOR CHECKING REQUIRED FIELDS */

function validateForm() {
    let x = document.forms["myForm"]["full-name"].value;
    if (x == "") {
        return false;
    }
}

let form = document.getElementById('myForm');

form.onsubmit = function(e) {

    e.preventDefault();

    //fetch code here
    changeDisplay();

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(
            data => {
                document.getElementById('print-text-field').innerHTML = "Thank you for registering!" + "<br>" + " You will shortly receive an email to confirm your registration.";
                document.getElementById('print-img-field').innerHTML = ("<br>" + "<img src='" + data.message + "'>");
            }
        )


}


/* FUNCTION FOR REST */

function changeDisplay() {
    textBox.classList.toggle("active");
    container.classList.toggle("active");
}

function moreDogs() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(
            data => {
                document.getElementById('print-text-field').innerHTML = "Thank you for registering!" + "<br>" + " You will shortly receive an email to confirm your registration.";
                document.getElementById('print-img-field').innerHTML = ("<br>" + "<img src='" + data.message + "'>");
            }
        )
}