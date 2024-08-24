const form = document.getElementById('form-clientes');


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
})

function adicionaLinha(){
    const inputCadastroNome = document.getElementById('CadastroNome');
    const inputCpf = document.getElementById('CadastroCpfCnjp');
    const InputNumero = document.getElementById('CadastroNumero');

    let adicionaLinha = '<tr>'
    linha += `<td>${inputCadastroNome.value}</td>`;
    linha +=`<td>${inputCpf.value}</td>`;
    linha += `<td>${InputNumero.value}</td>`;

    linha +='</tr>';
}