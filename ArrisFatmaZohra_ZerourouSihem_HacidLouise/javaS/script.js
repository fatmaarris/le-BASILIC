const testimonials = [
    { name: "Jeanne", text: "Les plats sont délicieux et le service est excellent !" },
    { name: "Pierre", text: "J'ai passé une soirée inoubliable avec mes amis. À refaire !" },
    { name: "Marie", text: "Un restaurant authentique avec une ambiance chaleureuse." },
    { name: "Antoine", text: "Le meilleur restaurant de la ville, je recommande vivement !" },
    { name: "Sophie", text: "Une découverte culinaire exceptionnelle, à ne pas manquer !" },
    { name: "Luc", text: "Service impeccable et plats raffinés, un vrai régal pour les papilles." }
];

let currentIndex = 0;

function displayTestimonial() {
    const testimonialContainer = document.getElementById("testimonial-container");
    testimonialContainer.innerHTML = "";

    const testimonial = testimonials[currentIndex];

    const testimonialElement = document.createElement("div");
    testimonialElement.classList.add("testimonial");
    testimonialElement.innerHTML = `
        <p>"${testimonial.text}"</p>
        <p><strong>- ${testimonial.name}</strong></p>
    `;

    testimonialContainer.appendChild(testimonialElement);
}

function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    displayTestimonial();
}

document.addEventListener("DOMContentLoaded", () => {
    displayTestimonial();

    const nextButton = document.createElement("button");
    nextButton.textContent = "Suivant";
    nextButton.classList.add("next-btn");
    nextButton.addEventListener("click", nextTestimonial);

    const container = document.querySelector(".AVcontainer");
    container.appendChild(nextButton);
});
