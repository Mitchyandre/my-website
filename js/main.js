document.addEventListener("DOMContentLoaded"), () => {
    console.log("4MANY website loaded!");

}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
  
 
// Form Validation
function validateForm(event) {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const phone = document.forms["contactForm"]["phone"].value;
    const message = document.forms["contactForm"]["message"].value;

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        event.preventDefault();
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Name must only contain letters and spaces.");
        event.preventDefault();
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid email address.");
        event.preventDefault();
        return false;
    
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        event.preventDefault();
        return false;
    }
}
