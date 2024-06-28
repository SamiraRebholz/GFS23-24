const modalOpeners = document.querySelectorAll('.modal-opener');

// Loop through each element and add a click event listener
modalOpeners.forEach(modalOpener => {
  modalOpener.addEventListener('click', function() {
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
// Close the modal when the user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target.className === 'modal') {
    event.target.style.display = "none";
  }
});