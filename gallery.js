// Auto-scrolls the gallery row every 3 seconds
const galleryRow = document.getElementById("galleryRow");

setInterval(() => {
  if (galleryRow) {
    galleryRow.scrollBy({ left: 200, behavior: "smooth" });
  }
}, 3000);
