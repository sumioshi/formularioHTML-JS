
const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemValidacao = document.getElementById('mensagem-validacao');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        alert("Formulário válido. B é maior que A.");
    } else {
        alert("Formulário inválido. B deve ser maior que A.");
    }
});
