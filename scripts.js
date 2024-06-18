// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   // Get the form element
   const donationForm = document.getElementById('donationForm');

   // Handle form submission
   donationForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent the form from submitting normally

       // Validate form inputs (assuming validateForm function is defined as in the previous example)
       if (validateForm()) {
           // Simulate form submission (replace with actual submission logic if needed)
           alert('Thank you for your donation!'); // Show a thank you message
           donationForm.reset(); // Reset the form after submission
       } else {
           alert('Please fill out all required fields.');
       }
   });

   // Function to validate form inputs
   function validateForm() {
       // Get form inputs (assuming fields are validated as required)
       const fullName = document.getElementById('fullName').value;
       const email = document.getElementById('email').value;
       const address = document.getElementById('address').value;
       const city = document.getElementById('city').value;
       const state = document.getElementById('state').value;
       const zipCode = document.getElementById('zipCode').value;
       const country = document.getElementById('country').value;
       const donationAmount = document.getElementById('donationAmount').value;
       const nameOnCard = document.getElementById('nameOnCard').value;
       const cardNumber = document.getElementById('cardNumber').value;
       const expMonth = document.getElementById('expMonth').value;
       const expYear = document.getElementById('expYear').value;
       const cvv = document.getElementById('cvv').value;

       // Check if all required fields are filled
       if (fullName && email && address && city && state && zipCode && country &&
           donationAmount && nameOnCard && cardNumber && expMonth && expYear && cvv) {
           return true; // Form is valid
       } else {
           return false; // Form is not valid
       }
   }
});
