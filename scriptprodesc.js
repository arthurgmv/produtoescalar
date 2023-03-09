function calcularProdutoEscalar() {
  var vetor1 = [];
  var vetor2 = [];
  for (var i = 1; i <= 10; i++) {
    vetor1.push(parseInt(document.getElementById("vetor1-" + i).value));
    vetor2.push(parseInt(document.getElementById("vetor2-" + i).value));
  }
  var produtoEscalar = 0;
  for (var j = 0; j < 10; j++) {
    produtoEscalar += vetor1[j] * vetor2[j];
  }
  document.getElementById("resultado").innerHTML = "O produto escalar entre os vetores é: " + produtoEscalar;
}
