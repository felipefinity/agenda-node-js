import validator from "validator";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    for (let errorText of this.form.querySelectorAll('.text-danger')) {
      errorText.remove();
    }

    if (nomeInput.value === '') {
      this.criaErro(nomeInput, 'Por favor digite um nome.')
      error = true;
    }

    if (sobrenomeInput.value === '') {
      this.criaErro(sobrenomeInput, 'Por favor digite um sobrenome.')
      error = true;
    }

    if (!validator.isEmail(emailInput.value)) {
      this.criaErro(emailInput, 'Por favor digite um email válido.')
      error = true;
    }

    if (telefoneInput.value === '') {
      this.criaErro(telefoneInput, 'Por favor digite o telefone.')
      error = true;
    }

    if (!error) el.submit();
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('text-danger', 'mt-1');
    campo.insertAdjacentElement('afterend', div);
  }
}