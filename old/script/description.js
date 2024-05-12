// Get all elements with class "card-text"
const cardTexts = document.querySelectorAll('.card-text');

// Loop through each element and add a click event listener
cardTexts.forEach(cardText => {
  cardText.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal-id');
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// Close the modal when the close button is clicked
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', function() {
    this.parentElement.parentElement.style.display = "none";
  });
});