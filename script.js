// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  console.log("Site is ready!");

  // Example: Alert when clicking a destination image
  const destinations = document.querySelectorAll('.destination');
  destinations.forEach(img => {
    img.addEventListener('click', () => {
      alert(`You clicked on ${img.alt}!`);
    });
  });

  // Example: Form validation for contact page
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent actual submission
      const name = contactForm.querySelector('input[name="name"]').value;
      const email = contactForm.querySelector('input[name="email"]').value;
      const message = contactForm.querySelector('textarea[name="message"]').value;

      if (!name || !email || !message) {
        alert("Please fill in all fields before sending.");
      } else {
        alert("Form submitted successfully!");
        contactForm.reset();
      }
    });
  }
});
