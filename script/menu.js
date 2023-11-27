document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.querySelector('.fixed-navbar .menu-btn');
  var menuList = document.querySelector('.fixed-navbar ul');

  menuButton.addEventListener('click', function(event) {
    // Toggle menu display on click
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Prevent click from immediately propagating to document
  });

  // Event listener for clicks on the entire document
  document.addEventListener('click', function(event) {
    if (menuList.style.display === 'block' && !menuButton.contains(event.target) && !menuList.contains(event.target)) {
      // Hide the menu if click is outside of menu or menu button
      menuList.style.display = 'none';
    }
  });
});