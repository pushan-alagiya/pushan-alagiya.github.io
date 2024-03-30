function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || phone == "" || message == "") {
    alert("All fields are required!");
    return false;
  }
  // Add additional validation rules if needed
  // Example: Validate email format, phone number format, etc.

  return true;
}

// Event listener for form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
