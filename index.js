document.addEventListener("DOMContentLoaded", function() {
   const questions = document.querySelectorAll('.question');
   questions.forEach(function(question) {
     question.addEventListener('click', function() {
       const answer = this.nextElementSibling;
       answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
     });
   });
 });
 

 document.addEventListener('DOMContentLoaded', function() {
   const filterBtns = document.querySelectorAll('.filter-btn');
   const images = document.querySelectorAll('.image');
 
   filterBtns.forEach(btn => {
     btn.addEventListener('click', function() {
       // Remove active class from all buttons
       filterBtns.forEach(btn => {
         btn.classList.remove('active');
       });
       // Add active class to clicked button
       this.classList.add('active');
 
       // Show/hide images based on the filter
       const filter = this.getAttribute('data-filter');
       images.forEach(image => {
         if (filter === 'latest') {
           image.classList.contains('latest') ? image.style.display = 'block' : image.style.display = 'none';
         } else if (filter === 'featured') {
           image.classList.contains('featured') ? image.style.display = 'block' : image.style.display = 'none';
         } else if (filter === 'bestseller') {
           image.classList.contains('bestseller') ? image.style.display = 'block' : image.style.display = 'none';
         }
       });
     });
   });
 });
 
 
