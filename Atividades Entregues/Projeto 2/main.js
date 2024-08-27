const form = document.getElementById('form-clientes');
const btnRest = document.getElementById('EvniarTabela');


let linhas ='';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

btnRest.addEventListener('click', function(){
    const corpoTabela= document.querySelector('tbody');
    corpoTabela.innerHTML ='';
    linhas.innerHTML ='';
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

        inputCadastroNome.value='';
        inputCpf.value='';
        inputNumero.value='';

};

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
