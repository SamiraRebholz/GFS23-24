document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.querySelector('.fixed-navbar .menu-btn');
  var menuList = document.querySelector('.fixed-navbar ul');

  menuButton.addEventListener('click', function(event) {
    // Toggle menu display on click
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Prevent click from immediately propagating to document
  });

  document.addEventListener('click', function(event) {
    var isClickInsideMenu = menuList.contains(event.target) || menuButton.contains(event.target);

    if (!isClickInsideMenu) {
      // Hide the menu if click is outside of menu
      menuList.style.display = 'none';
    }
  });
});