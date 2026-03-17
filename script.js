// welcome 
window.onload = function () {
    alert("Welcome to Farida Fadel's portfolio page!");
};

// toggle button
const toggleButton = document.getElementById("modeToggle");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// skills
const addButton = document.getElementById("addSkill");
const skillInput = document.getElementById("newSkill");
const skillsList = document.getElementById("skillsList");

addButton.addEventListener("click", function () {

    const newSkill = skillInput.value;

    if (newSkill === "") {
        alert("Please enter a skill");
        return;
    }

    const li = document.createElement("li");
    li.textContent = newSkill;

    skillsList.appendChild(li);

    skillInput.value = "";
});

// contact
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

});