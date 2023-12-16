function showImage(image) {
  const imageContainer = document.getElementById('imageContainer');
  const img = document.getElementById('image');
  const overlay = document.querySelector('.overlay'); // Zugriff auf die Überlagerung

  img.src = image;
  imageContainer.style.display = 'block';
  overlay.style.display = 'block'; // Zeigt die Überlagerung an
}

function hideImage() {
  const imageContainer = document.getElementById('imageContainer');
  const overlay = document.querySelector('.overlay'); // Zugriff auf die Überlagerung

  imageContainer.style.display = 'none';
  overlay.style.display = 'none'; // Versteckt die Überlagerung
}