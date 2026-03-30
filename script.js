function callNumber(number) {
  window.location.href = "tel:" + number ;
}
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();
  const services = document.querySelectorAll(".service");

  services.forEach(service => {
    const text = service.innerText.toLowerCase();
    if (text.includes(value)) {
      service.style.display = "block";
    } else {
      service.style.display = "none";
    }
  });
});
function filterService(category) {
  const services = document.querySelectorAll(".service");

  services.forEach(service => {
    if (category === "all") {
      service.style.display = "block";
    } else if (service.classList.contains(category)) {
      service.style.display = "block";
    } else {
      service.style.display = "none";
    }
  });
}
