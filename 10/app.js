
// 1. Seleção do formulário
var formulário = document.getElementById('formulárioDeCadastro');

// 2. Seleção do campo
var campoTelefone = document.getElementById('telefone');

// 3. Captura o evento de envio do formulário e disparar a rotina

formulário.addEventListener('submit', function() {
    
    var valorDoCampoTelefoneSemTratamento = campoTelefone.value;

    // \s = espaços
    // \D = para números
    var valorDoCampoTelefoneSemEspaços = valorDoCampoTelefoneSemTratamento
    .replace(/\s/g, '');

    var valorDoCampoTelefoneSemCaracteres = valorDoCampoTelefoneSemEspaços
    .replace(/\D/g, '');

    var textoMinusculo = valorDoCampoTelefoneSemTratamento.toLowerCase();
    var textoMaiusculo = valorDoCampoTelefoneSemTratamento.toUpperCase();

    // 3.1. Capturando os dados do formulário
    // alert(`Valor sem tratamento: ${valorDoCampoTelefoneSemTratamento}`);
    alert(`Valor tratamento: ${valorDoCampoTelefoneSemTratamento}`);

    alert(`Valor tratado ${valorDoCampoTelefoneSemCaracteres}`);

});