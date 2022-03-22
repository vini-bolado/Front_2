
    // 1. Selecione o formulário e o botão do campo de entrada

    var campo = document.getElementById('formularioDeCadastro');
    var botao = document.getElementById('botao');
    

    // 2. Crie uma rotina que será disparada a partir do evento de envio

    function validarEnviarDadosDoFormulario(evento) {
    
        var valorDoCampoNome = evento.target[0].value.trim();
    
        var campoEstaVazio = estaVazio(valorDoCampoNome);
        var campoPossuiNumeros = possuiNumeros(valorDoCampoNome);
        var campoPossuiCaracteresEspeciais = possuiCaracteresEspeciais(valorDoCampoNome);
        var campoPossuiMaisDeVinteCaracteres = possuiMaisDeVinteCaracteres(valorDoCampoNome)

    

        if(campoEstaVazio) {
            console.log('Campo é obrigatório e precisa ser preenchido!');
        }
        else if (campoPossuiMaisDeVinteCaracteres) {
            console.log('Campo não pode ultrapassar vinte caracteres');
        }
        else if(campoPossuiNumeros) {
            console.log('Campo não pode ter números!');
        }
        else if(campoPossuiCaracteresEspeciais) {
            console.log('Campo não pode conter caracteres especiais');
        }
        else {
            console.log('Está tudo ok para envio');
        }



    };    


    function possuiCaracteresEspeciais(valorDoCampo) {

        var expressaoRegular = /\W/g;
                
        var respostaDaValidacao = expressaoRegular.test(valorDoCampo);
        
        return respostaDaValidacao;
    }
    
    function estaVazio(valorDoCampo) {

        var respostaDaValidacao = valorDoCampo === '';
        
        return respostaDaValidacao;
    }
    

    function possuiNumeros(valorDoCampo) {
    
        var expressaoRegular = /\d+/g;
            
        var respostaDaValidacao = expressaoRegular.test(valorDoCampo);
    
        return respostaDaValidacao;
    }
    

    
   
    function possuiMaisDeVinteCaracteres(valorDoCampo) {
    
        var numeroDeCaracteres = valorDoCampo.length;
    
        var limiteDeCaracteres = 20;
    
        var respostaDaValidacao = numeroDeCaracteres > limiteDeCaracteres;
    
        return respostaDaValidacao;
        
    }
    
    campo.addEventListener('blur', validarEnviarDadosDoFormulario);


















    //     - 2.2. Valide se existem caracteres especiais

    //         - Se o campo possuir caracteres especiais, apresente um alerta para o usuário com a seguinte mensagem `"Não é permitido o uso de caracteres especiais em sua lista."`. **Nota:** Pode ser utilizado o método `alert()` para simplificar a lógica.

    //     - 2.3. Caso passe na validacão, apresente o item no elemento DOM `<li class="c-lista__item">`.

    // 3. Crie uma rotina que será disparada sempre que o usuário tirar o foco da campo de entrada

    //     - 2.1. Valide se o campo esta vazio

    //         - Se o campo estiver vazio, desative o botão `<button class="c-form__botao u-my" type="submit">Adicionar item</button>`.

    //     - 2.2. Valide se existem caracteres especiais 

    //         - Se o campo possuir caracteres especiais, apresente a seguinte mensagem no console do navegador `"Não é permitido o uso de caracteres especiais em sua lista."`.