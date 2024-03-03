document.addEventListener("DOMContentLoaded", function() {
   const questions = document.querySelectorAll('.question');
   questions.forEach(function(question) {
     question.addEventListener('click', function() {
       const answer = this.nextElementSibling;
       answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
     });
   });
 });
 

 document.addEventListener('DOMContentLoaded', function () {
   // Google Map integration using Funwork 2
   // You'll need to integrate Funwork 2 here for displaying the Google Map
   
   // Form validation
   const contactForm = document.getElementById('contact-form');
   const formMessage = document.getElementById('form-message');
 
   contactForm.addEventListener('submit', function (event) {
     event.preventDefault();
 
     const name = contactForm.elements['name'].value.trim();
     const email = contactForm.elements['email'].value.trim();
     const message = contactForm.elements['message'].value.trim();
 
     let isValid = true;
 
     // Validate name
     if (name.length > 15) {
       isValid = false;
     }
 
     // Validate email
     const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (!emailPattern.test(email)) {
       isValid = false;
     }
 
     // Validate message length
     if (message.length < 2 || message.length > 120) {
       isValid = false;
     }
 
     // Display appropriate message
     if (!name || !email || !message) {
       formMessage.textContent = "Please enter the name, email, and message.";
     } else if (!isValid) {
       formMessage.textContent = "Enter a valid name, email, or message.";
     } else {
       formMessage.textContent = "Successfully Submitted!";
       contactForm.reset();
     }
   });
 });
 
