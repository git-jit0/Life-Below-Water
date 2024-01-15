document.addEventListener('DOMContentLoaded', function () {
      const sideNav = document.querySelector('.side_navbar');
      const toggleButton = document.querySelector('.toggle_button'); 
      // Replace with your toggle button element
  
      // Function to toggle the sidebar
      function toggleSidebar() {
          sideNav.classList.toggle('show');
      }
  
      // Add click event listener to the toggle button
      toggleButton.addEventListener('click', toggleSidebar);
  });
  