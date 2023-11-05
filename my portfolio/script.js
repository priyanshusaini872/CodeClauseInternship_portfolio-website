
function toggleContent(section) {
    var contentElement = document.getElementById(section + 'Content');
    if (contentElement.style.display === 'none') {
      contentElement.style.display = 'block';
    } else {
      contentElement.style.display = 'none';
    }
  }
  