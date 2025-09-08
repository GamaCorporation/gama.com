// Inicializa o EmailJS
(function(){
  emailjs.init('CL-amUqss-wJiPVtf');
})();

// Seleciona o formulário pela classe
const form = document.querySelector('.contato-form');

// Adiciona name aos inputs dinamicamente (necessário para EmailJS)
form.querySelector('#nome').setAttribute('name', 'nome');
form.querySelector('#email').setAttribute('name', 'email');
form.querySelector('#telefone').setAttribute('name', 'telefone');
form.querySelector('#assunto').setAttribute('name', 'assunto');
form.querySelector('#mensagem').setAttribute('name', 'mensagem');

// Escuta o evento submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita recarregar a página

  emailjs.sendForm('service_rpo1xi4', 'template_i9i5bzd', form)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.reset(); // limpa o formulário
    }, (error) => {
      alert('Erro ao enviar mensagem: ' + error.text);
    });
});
