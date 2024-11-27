// Function to open the modal
function openModal(imageId) {
    document.getElementById(imageId).style.display = "flex";
  }
  
  // Function to close the modal
  function closeModal(imageId) {
    document.getElementById(imageId).style.display = "none";
  }
  
  // Add event listeners to all anchor tags
  const links = document.querySelectorAll('.gallery a');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      const targetId = link.getAttribute('href').substring(1);
      openModal(targetId);
      event.preventDefault();
    });
  });
  