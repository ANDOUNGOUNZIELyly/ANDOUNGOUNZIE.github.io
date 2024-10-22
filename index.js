let index = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showItem() {
  const carousel = document.querySelector(".carousel");

  // Défilement du carrousel
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Fonction pour passer à l'élément suivant
function nextItem() {
  index = (index + 1) % totalItems; // Passe à l'élément suivant
  showItem();
}

function prevItem() {
  index = (index - 1 + totalItems) % totalItems;
  showItem();
}

document.querySelector(".right-btn").addEventListener("click", nextItem);
document.querySelector(".left-btn").addEventListener("click", prevItem);

setInterval(nextItem, 5000);

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Nom:", name);
    console.log("Société:", company);
    console.log("Téléphone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);

    this.reset();
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupération des données saisies par l'utilisateur
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Nom:", name);
    console.log("Société:", company);
    console.log("Téléphone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);

    this.reset();
  });
