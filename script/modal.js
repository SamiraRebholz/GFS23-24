function showImage(image) {
  const imageContainer = document.getElementById('imageContainer');
  const img = document.getElementById('image');
  img.src = image;
  imageContainer.style.display = 'block';
}
function hideImage() {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.style.display = 'none';
}