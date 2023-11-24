
const savedMessage = localStorage.getItem("thankYouMessage");

const newTextElement = document.getElementById("myH1");
const firstNameElement = document.getElementById("myFirstName");
const submitElement = document.getElementById("mySubmit");

if (savedMessage) {
    newTextElement.innerText = savedMessage;
}

submitElement.addEventListener("click", function (event) {
    let firstName = firstNameElement.value;
    newTextElement.innerText = "Thank you, " + firstName + "! Your message has been submitted.";
})

localStorage.setItem("thankYouMessage", message);
newTextElement.innerText = "Thank you, " + firstName + "! Your message has been submitted.";