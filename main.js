function validarFormulario(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = '';

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        mensagem.style.color = 'red';
    }
}