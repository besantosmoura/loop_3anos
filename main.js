
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Resolva a expressão");

    
    if (respostaTime.toLowerCase() === "beatriz") {
      alert("Parabéns!!!, vamos dificultar um pouco agora!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
