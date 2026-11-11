(() => {
  const refs = {
    form: document.querySelector('form'),
    name: document.getElementById('name'),
    tel: document.getElementById('tel'),
    email: document.getElementById('email'),
    nameError: document.querySelector('#name + span.error'),
    emailError: document.querySelector('#email + span.error'),
    telError: document.querySelector('#tel + span.error'),
    submitButton: document.querySelector('.form__button'),
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    body: document.querySelector('[data-body]'),
    modal: document.querySelector('[data-modal]'),
  };

  if (!refs.modal || !refs.form) return;

  // Manage the modal window
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

  // Check the validity of the entire form to activate/deactivate the button
  function validateForm() {
    if (!refs.submitButton) return;

    const isFormValid = refs.form.checkValidity();

    if (isFormValid) {
      refs.submitButton.removeAttribute('disabled');
      refs.submitButton.classList.remove('is-disabled');
    } else {
      refs.submitButton.setAttribute('disabled', 'true');
      refs.submitButton.classList.add('is-disabled');
    }
  }

  // Listen for changes in the form
  refs.form.addEventListener('input', validateForm);
  refs.form.addEventListener('change', validateForm);

  // Initial call on page load
  validateForm();

  // Submit form
  refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!refs.form.checkValidity()) return;

    alert('Our manager will contact you shortly. Thank you for choosing us.');
    toggleModal();
    refs.form.reset();
    validateForm();
  });

  // Email Validation
  refs.email.addEventListener('input', () => {
    if (refs.email.validity.valid) {
      refs.emailError.textContent = '';
      refs.emailError.classList.remove('active');
    } else {
      showEmailError();
    }
  });

  function showEmailError() {
    if (refs.email.validity.valueMissing) {
      refs.emailError.textContent = 'You need to enter an e-mail address.';
    } else if (refs.email.validity.tooShort) {
      refs.emailError.textContent = `Email should be at least ${refs.email.minLength} characters; you entered ${refs.email.value.length}.`;
    } else if (refs.email.validity.typeMismatch) {
      refs.emailError.textContent =
        'Please enter a valid email address (user@example.com).';
    }
    refs.emailError.classList.add('active');
  }

  //  Name Validation
  refs.name.addEventListener('input', () => {
    if (refs.name.validity.valid) {
      refs.nameError.textContent = '';
      refs.nameError.classList.remove('active');
    } else {
      showNameError();
    }
  });

  function showNameError() {
    if (refs.name.validity.valueMissing) {
      refs.nameError.textContent = 'You need to enter a name.';
    } else if (refs.name.validity.tooShort) {
      refs.nameError.textContent = `Name should be at least ${refs.name.minLength} characters.`;
    }
    refs.nameError.classList.add('active');
  }

  // Phone Validation
  refs.tel.addEventListener('input', () => {
    if (refs.tel.validity.valid) {
      refs.telError.textContent = '';
      refs.telError.classList.remove('active');
    } else {
      showTelError();
    }
  });

  function showTelError() {
    if (refs.tel.validity.valueMissing) {
      refs.telError.textContent = 'You need to enter a phone number.';
    } else if (refs.tel.validity.patternMismatch) {
      refs.telError.textContent =
        'Please enter a valid Ukrainian phone number +380... or 050..';
    }
    refs.telError.classList.add('active');
  }

  // Hiding errors when focus is lost (blur)
  refs.email.addEventListener('blur', () => {
    refs.emailError.classList.remove('active');
  });

  refs.name.addEventListener('blur', () => {
    refs.nameError.classList.remove('active');
  });

  refs.tel.addEventListener('blur', () => {
    refs.telError.classList.remove('active');
  });
})();
