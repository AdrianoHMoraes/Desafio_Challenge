//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaNomesAmigos = [];
//let amigoSecreto = sortearAmigoAleatorio();

function adicionarAmigo(){
   const nomeAmigo = document.querySelector('input').value;
   if (nomeAmigo.trim() !== ''){
       listaNomesAmigos.push(nomeAmigo);
       console.log(listaNomesAmigos);
       limparCampo();
       exibirNomesAmigos();
   }
  
}

function limparCampo() {
    nomeAmigoInput = document.querySelector('input');
    nomeAmigoInput.value = '';
}

function exibirNomesAmigos() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    listaNomesAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigoAleatorio() {
    if (listaNomesAmigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaNomesAmigos.length);
    const amigoSorteado = listaNomesAmigos[indiceAleatorio];
    alert(`O amigo secreto sorteado é: ${amigoSorteado}`);
}

function reiniciarSorteio() {
    listaNomesAmigos = [];
    exibirNomesAmigos();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function atualizarBotaoReiniciar() {
    const botaoReiniciar = document.getElementById('reiniciar');
    if (listaNomesAmigos.length > 0) {
        botaoReiniciar.removeAttribute('disabled');
    } else {
        botaoReiniciar.setAttribute('disabled', true);
    }
}
