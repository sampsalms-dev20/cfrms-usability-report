<script>
const galleryImages = [
  "sus-1.png",
  "sus-2.png",
  "sus-3.png",
  "sus-4.png",
  "sus-5.png",
  "sus-6.png",
  "sus-7.png",
  "sus-8.png",
  "sus-9.png",
  "sus-10.png"
];

let currentImage = 0;

function openGallery(index = 0){
  currentImage = index;

  document.getElementById("galleryModal")
    .classList.add("active");

  updateGalleryImage();
}

function closeGallery(){
  document.getElementById("galleryModal")
    .classList.remove("active");
}

function updateGalleryImage(){
  document.getElementById("galleryImage")
    .src = galleryImages[currentImage];
}

function nextImage(){
  currentImage = (currentImage + 1) % galleryImages.length;
  updateGalleryImage();
}

function prevImage(){
  currentImage =
    (currentImage - 1 + galleryImages.length) %
    galleryImages.length;

  updateGalleryImage();
}

// Close when clicking outside image
document.getElementById("galleryModal")
.addEventListener("click", function(e){

  if(e.target.id === "galleryModal"){
    closeGallery();
  }

});
</script>
