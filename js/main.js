const form = document.getElementById("receita-form");
const receitasDiv = document.getElementById("receitas");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nomeReceita = document.getElementById("nome-receita").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const modoPreparo = document.getElementById("modo-preparo").value;

  const receitaElement = document.createElement("div");
  receitaElement.classList.add("receita");

  const nomeReceitaElement = document.createElement("h3");
  nomeReceitaElement.textContent = nomeReceita;

  const ingredientesElement = document.createElement("p");
  ingredientesElement.textContent = "Ingredientes: " + ingredientes;

  const modoPreparoElement = document.createElement("p");
  modoPreparoElement.textContent = "Modo de Preparo: " + modoPreparo;

  receitaElement.appendChild(nomeReceitaElement);
  receitaElement.appendChild(ingredientesElement);
  receitaElement.appendChild(modoPreparoElement);

  receitasDiv.appendChild(receitaElement);

  form.reset();
});
