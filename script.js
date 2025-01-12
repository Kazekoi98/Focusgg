// JavaScript para interactividad

document.addEventListener("DOMContentLoaded", () => {
    // Botón CTA en la sección Hero
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", () => {
        alert("¡Bienvenido a Coaching de League of Legends! Explora nuestros servicios para mejorar tu juego.");
    });

    // Validación básica del formulario
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        alert("Gracias por contactarnos, " + name + "! Nos pondremos en contacto contigo pronto.");

        // Reiniciar el formulario
        form.reset();
    });
});
