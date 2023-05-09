'use strict';

//get all the buttons

const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const zero = document.getElementById('zero');
const ponto = document.getElementById('ponto');
const igual = document.getElementById('igual');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const vezes = document.getElementById('vezes');
const divisao = document.getElementById('divisao');
const limpar = document.getElementById('clear');

//get the input field

let input = document.getElementById('output');

//add event listeners to the buttons

um.addEventListener('click', function() {
    removeZero();
    input.innerText += um.innerText;


    }
);

dois.addEventListener('click', function() {
    removeZero()
   input.innerText += dois.innerText;
    }
);

tres.addEventListener('click', function() {
    removeZero()
   input.innerText += tres.innerText;
    }
);

quatro.addEventListener('click', function() {
    removeZero()
   input.innerText += quatro.innerText;
    }
);

cinco.addEventListener('click', function() {
    removeZero()
   input.innerText += cinco.innerText;
    }

);

seis.addEventListener('click', function() {
    removeZero()
   input.innerText += seis.innerText;
    }
);

sete.addEventListener('click', function() {
    removeZero()
   input.innerText += sete.innerText;
    }
);

oito.addEventListener('click', function() {
    removeZero()
   input.innerText += oito.innerText;
    }
);


nove.addEventListener('click', function() {
    removeZero()
   input.innerText += nove.innerText;
    }
);

zero.addEventListener('click', function() {
    removeZero()
   input.innerText += zero.innerText;
    }

);

ponto.addEventListener('click', function() {
    removeZero()
   input.innerText += ponto.innerText;
    }
);

mais.addEventListener('click', function() {
    removeZero()
   input.innerText += mais.innerText;
    }
);

menos.addEventListener('click', function() {
    removeZero()
   input.innerText += menos.innerText;
    }
);

vezes.addEventListener('click', function() {
    removeZero()
   input.innerText += vezes.innerText;
    }

);

divisao.addEventListener('click', function() {
    removeZero()
   input.innerText += divisao.innerText;
    }
);

limpar.addEventListener('click', function() {
    removeZero()
   input.innerText = '0';
    }
);

//when we add any number we need to remove the 0 from the input field

//we gonna do that with a function

function removeZero() {

    let valor = input.innerText;

    if(valor == '0') {
        input.innerText = '';
    }
}

//when we click the equal button we gonna do the calculation

igual.addEventListener('click', function() {

            //we gonna send the input to a php socket and get the result back
     
            
            let valor = input.innerText;
            //create an ajax request
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'calculadora.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if(this.status == 200) {
                    input.innerText = this.responseText;
                }
           }
            xhr.send(valor);
    }
);


let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(event) {
  console.log("Conexão estabelecida");
};

socket.onmessage = function(event) {
  console.log("Mensagem recebida: " + event.data);
  input.innerText = event.data;
};

igual.addEventListener('click', function() {
  let valor = input.innerText;
  socket.send(valor);
});


//mostra os valores no input










