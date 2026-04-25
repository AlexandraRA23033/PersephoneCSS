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
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Función para cerrar el modal mejorada
    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const modal = btn.closest(".modal");
            if (modal) {
                modal.classList.remove("is-open");
                document.body.style.overflow = "auto";
            } else {
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

    // Función para cerrar las alertas
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("alerta-close")) {
            const alerta = e.target.closest(".alerta, .alerta-pildora");
            if (alerta) alerta.remove();
        }
    });

});


/* --- LÓGICA DEL SIDEBAR --- */
const sidebar = document.querySelector(".sidebar-main");
const sidebarToggleBtn = document.querySelector(".sidebar-toggle-btn");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (sidebar && sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("is-open");
        sidebarToggleBtn.classList.toggle("is-open");
        if (sidebarOverlay) sidebarOverlay.classList.toggle("is-active");
    });

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", () => {
            sidebar.classList.remove("is-open");
            sidebarToggleBtn.classList.remove("is-open");
            sidebarOverlay.classList.remove("is-active");
        });
    }
}

