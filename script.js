function isNotEmpty(str) {
    return str.trim().length > 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPattern(pattern) {
    const patterneRegex = /^[0-9]{2}[A-Z]{3}$/;
    return patterneRegex.test(pattern);
}

const form = document.getElementById("form");
const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const birthdate = document.getElementById("birth-date");
const email = document.getElementById("email");
const insurance = document.getElementById("insurance");
const term = document.getElementById("terms");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isNotEmpty(firstname.value)) {
        alert("Please fill first name");
    } else if (!isNotEmpty(lastname.value)) {
        alert("Please fill last name");
    } else if (!isNotEmpty(birthdate.value)) {
        alert("Please fill birthdate");
    } else if (!isValidEmail(email.value)) {
        alert("Please enter a valid Email");
    } else if (!isValidPattern(insurance.value)) {
        alert("Insurance should follow pattern of 2 numbers and 3 capital letters");
    } else if (!term.checked) {
        alert("Please agree to the terms of service");
    } else {
        alert("Form Submitted Successfully!");
    }
});