
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Resolva a expressão 2x3(3+5)²-4x(2-1)³");

    
    if (respostaTime.toLowerCase() === "124") {
      alert("Parabéns!!!, vamos dificultar um pouco agora!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

