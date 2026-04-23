// Se espera a que el documento cargue
document.addEventListener("DOMContentLoaded", () => {
    
    /* --- LÓGICA DEL NAVBAR --- */
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");

    // En caso de que ambos existan, hacer el evento click
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("is-active");
        });
    }

    /* --- LÓGICA DE LOS MODALES --- */
    const openButtons = document.querySelectorAll("[data-modal-target]");
    const closeButtons = document.querySelectorAll(".modal-close, .btn-close-modal");
    const modals = document.querySelectorAll(".modal");

    // Función para abrir el modal
    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal-target");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add("is-open");
                // Evita que el fondo se mueva mientras el modal está abierto
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Función para cerrar el modal mejorada
    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que el botón haga cosas raras
            const modal = btn.closest(".modal");
            if (modal) {
                modal.classList.remove("is-open");
                document.body.style.overflow = "auto";
            } else {
                // Si por alguna razón .closest no lo encuentra, buscamos el que esté abierto
                const openModal = document.querySelector(".modal.is-open");
                if(openModal) openModal.classList.remove("is-open");
                document.body.style.overflow = "auto";
            }
        });
    });

    // Cerrar si se hace clic en el fondo oscuro
    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove("is-open");
                document.body.style.overflow = "auto";
            }
        });
    });
});