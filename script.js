// Image Slider
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Global_Health_GIS_Mapping.png/640px-Global_Health_GIS_Mapping.png",
  "https://www.researchgate.net/profile/Mohamed-Bekhit/publication/343158764/figure/fig2/AS:920721552928769@1595683254311/Example-of-health-GIS-application-map-Adapted-from-https-www-mdpi-com-2220.ppm",
  "https://www.nap.edu/resource/25622/interactive-map-health.pdf"
];

let current = 0;
function changeImage() {
  current = (current + 1) % images.length;
  document.getElementById("slide").src = images[current];
}
setInterval(changeImage, 4000);

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Please fill in all fields.");
    e.preventDefault();
  }
});
