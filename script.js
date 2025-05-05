// script.js

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll-to-top button
const topBtn = document.createElement("button");
topBtn.textContent = "↑ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.backgroundColor = "#00bcd4";
topBtn.style.color = "white";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lightbox for Gallery Images
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `<div class="lightbox-content"><img src="${this.src}" alt="${this.alt}" /><button class="close-lightbox">X</button></div>`;
    document.body.appendChild(lightbox);

    // Close lightbox
    document.querySelector(".close-lightbox").addEventListener("click", function () {
      lightbox.remove();
    });
  });
});

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const options = {
  rootMargin: '0px 0px 200px 0px',
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
}, options);

images.forEach(img => {
  imageObserver.observe(img);
});
const vid = document.querySelector("video");
vid.volume = 1.0; // full volume
