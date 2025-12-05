(function(){
  emailjs.init('CL-amUqss-wJiPVtf');
})();

const form = document.querySelector('.contato-form');

form.querySelector('#nome').setAttribute('name', 'nome');
form.querySelector('#email').setAttribute('name', 'email');
form.querySelector('#telefone').setAttribute('name', 'telefone');
form.querySelector('#assunto').setAttribute('name', 'assunto');
form.querySelector('#mensagem').setAttribute('name', 'mensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_rpo1xi4', 'template_i9i5bzd', form)
    .then(() => {
      showMessage('Mensagem enviada com sucesso!');
      form.reset(); 
    }, (error) => {
      showMessage('Erro ao enviar mensagem: ' + error.text);
    });
});
