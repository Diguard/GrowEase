(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();

function toggleModal() {
  const modal = document.querySelector('[data-modal]');
  const body = document.querySelector('[data-body]');

  modal.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
}

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  alert('Our manager will contact you shortly. Thank you for choosing us.');

  toggleModal();
  form.reset();
}
