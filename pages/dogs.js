/* FUNCTION FOR CHECKING REQUIRED FIELDS */


/* FUNCTION FOR REST */

let textBox = document.getElementById("cta-text-box");
let container = document.getElementById("rest-container");


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