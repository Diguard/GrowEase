(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-body]'),
  };

  if (!refs.modal) return;

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener('click', toggleModal);
  });

  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Our manager will contact you shortly. Thank you for choosing us.');
      toggleModal();
      form.reset();
    });
  }
})();
