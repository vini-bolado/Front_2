
var documento = document.body;
var tela = document.querySelector("#telaInicial");


//! Segunda parte!!!!!!


//! captura das teclas

documento.addEventListener("keypress" , function(evento){ 


//! Condicional pra saber se a tecla space foi pressionada


    if(evento.code == "Space"){


//! Ocultar a tela

    tela.style.display = "none"

    }

    if(evento.code == "Enter"){

    tela.style.display = "block"

    } 
});

    //! Primeira parte !!!!!!!

    var tabuleiro = document.querySelector(".tabuleiro");

    tabuleiro.addEventListener("click", (evento) => evento.target.innerText = "x" );

    tabuleiro.addEventListener("dblclick", (evento) => evento.target.innerText = "0" );

    tabuleiro.addEventListener("mouseover", (evento) => console.log(evento));