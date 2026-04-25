document.addEventListener("DOMContentLoaded", () => {

  /* --- FUNCIÓN REUTILIZABLE PARA CERRAR MODAL --- */
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.style.overflow = "auto";
  }

  /* --- LÓGICA DEL NAVBAR --- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("is-active");
    });
  }

  /* --- LÓGICA DE LOS MODALES --- */
  const openButtons = document.querySelectorAll("[data-modal-target]");
  const closeButtons = document.querySelectorAll(".modal-close, .btn-close-modal");
  const modals = document.querySelectorAll(".modal");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-target");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = btn.closest(".modal");
      if (modal) {
        closeModal(modal);
      } else {
        closeModal(document.querySelector(".modal.is-open"));
      }
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  /* --- LÓGICA DEL FORMULARIO --- */
  const form = document.getElementById("formRegistro");
  const btnGuardar = document.getElementById("btnGuardar");

  if (form && btnGuardar) {
    btnGuardar.addEventListener("click", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        closeModal(document.getElementById("modalForm"));
        form.reset();
      } else {
        form.reportValidity();
      }
    });
  }

  /* --- LÓGICA DEL SIDEBAR --- */
  const sidebar = document.querySelector(".sidebar-main");
  const sidebarBtn = document.querySelector(".sidebar-toggle");

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
    });
  }

  /* --- CERRAR ALERTAS --- */
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("alerta-close")) {
      const alerta = e.target.closest(".alerta, .alerta-pildora");
      if (alerta) alerta.remove();
    }
  });

});