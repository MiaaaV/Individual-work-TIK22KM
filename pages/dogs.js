/* FUNCTION FOR CHECKING REQUIRED FIELDS */


/* FUNCTION FOR REST */

let textBox = document.getElementById("cta-text-box");
let container = document.getElementById("rest-container");


function registerNow() {

    document.getElementById("name-field").innerHTML = "";
    document.getElementById("email-field").innerHTML = "";
    document.getElementById("password-field").innerHTML = "";

    const NAME_ERROR = "Name cannot include numbers.";
    const EMAIL_ERROR = "Email must include @ -sign.";
    const PASSW_ERROR = "Password must be at least 8 characters long.";

    let name = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (name !== 1) {
        document.getElementById("name-field").innerHTML = NAME_ERROR;
    }
    if (email !== "@") {
        document.getElementById("email-field").innerHTML = EMAIL_ERROR;

    }
    if (password.length !== 8) {
        document.getElementById("password-field").innerHTML = PASSW_ERROR;

    }

}


function getDog() {

    textBox.addEventListener("click", changeDisplay)
    container.addEventListener("click", changeDisplay)

    function changeDisplay() {
        textBox.classList.toggle("active");
        container.classList.toggle("active");
    }

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(
            data => {
                document.getElementById('print-text-field').innerHTML = "Thank you for registering!" + "<br>" + " You will shortly receive an email to confirm your registration.";
                document.getElementById('print-img-field').innerHTML = ("<br>" + "<img src='" + data.message + "'>");
            }
        )

}

function moreDogs() {

    textBox.addEventListener("click", changeDisplay)
    container.addEventListener("click", changeDisplay)

    function changeDisplay() {
        textBox.classList.add("active");
        container.classList.remove("active");
    }

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(
            data => {
                document.getElementById('print-text-field').innerHTML = "Thank you for registering!" + "<br>" + " You will shortly receive an email to confirm your registration.";
                document.getElementById('print-img-field').innerHTML = ("<br>" + "<img src='" + data.message + "'>");
            }
        )
}