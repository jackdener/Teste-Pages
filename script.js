let frutas = []; //Declaração do array de frutas
let precos = []; //Declaração do array de preços

function cadastro() {  //Declaração da função cadastro
  let fruta = document.getElementById("fruta").value; //Obtendo valor do input "fruta"
  let preco = Number(document.getElementById("preco").value); //Obtendo valor do input "preco"
  if (fruta != "" && preco != 0) {
    if (frutas.indexOf(fruta) == -1) {
      frutas.push(fruta); //Inserindo o valor de fruta no array frutas
      precos.push(preco); //Inserindo o valor de preco no array precos
      let mensagem = "Lista de frutas"; //Criando uma variável String para usar como saída
      for (let produto of frutas) { //Para cada produto contido no array frutas, faça...
        let pos = frutas.indexOf(produto); //Criando a variável pos para pegar o índice do produto
        mensagem += "<br>" + produto + "| Preço: " + precos[pos]; //Concatenando a mensagem de saída
      }
      document.getElementById("lista").innerHTML = mensagem; //Atualizando o parágrafo
    } else {
      alert("Essa fruta já foi cadastrada!");
    }
  } else {
    alert("Preencha corretamente os dois campos!");
  }
}
