const form = document.getElementById('form-clientes');


let linhas ='';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputCadastroNome = document.getElementById('CadastroNome');
    const inputCpf = document.getElementById('CadastroCpfCnpj');
    const inputNumero = document.getElementById('CadastroNumero');
    const pendente = 'Pendente'

    let linha = '<tr>'
    linha += `<td>${inputCadastroNome.value}</td>`;
    linha += `<td>${inputCpf.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `<td>${pendente}</td>`;
    linha += '</tr>';

    linhas += linha;


};

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
