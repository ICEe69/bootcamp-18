'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

function showLocationModal(dishName, dishLocation, dishDescription, latitude, longitude) {
  document.getElementById('dishName').innerText = dishName;
  document.getElementById('dishLocation').innerText = dishLocation;
  document.getElementById('dishDescription').innerText = dishDescription;
  
  // Set Google Maps URL dengan koordinat
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}`;
  document.getElementById('map').src = mapUrl;

  // Tampilkan modal
  const modal = document.getElementById('locationModal');
  modal.style.display = 'block'; 
}
function closeLocationModal() {
  const modal = document.getElementById('locationModal');
  modal.style.display = 'none'; // Sembunyikan modal
}

// Menutup modal saat mengklik di luar konten modal
window.onclick = function(event) {
  const modal = document.getElementById('locationModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function initMap() {
  // Lokasi (latitude dan longitude)
  var location = {lat: -6.123456, lng: 106.123456};
  
  // Membuat peta di elemen div dengan ID 'map'
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,  // Tingkat zoom peta
      center: location  // Menjadikan lokasi sebagai pusat peta
  });

  // Menambahkan marker di lokasi yang ditentukan
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}