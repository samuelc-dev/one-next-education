
exibirMensagemInicial();
let listaNumerosSorteados = [];
let tamanhoLimiteDaLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute(){

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){ exibirTextoNaTela('h1','Acertou!');

    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';

    let mensagemTentativas = `Você descobriu o número em ${tentativas + ' ' + palavraTentativa}`;

    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        chute > numeroSecreto ? exibirTextoNaTela('p', 'Número secreto é menor'):
        exibirTextoNaTela('p', 'Número secreto é maior');
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //uma funçãozinha pra botar o pc pra falar!
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

//usamos recursão;
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * tamanhoLimiteDaLista + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == tamanhoLimiteDaLista) listaNumerosSorteados = [];

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);    
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
