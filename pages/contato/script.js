const button = document.querySelector("button");

const limpaCampos = () => {
  const Nome = (document.querySelector("input[id=nome]").value = "");
  const Email = (document.querySelector("input[id=email]").value = "");
  const Mensagem = (document.querySelector("input[id=mensagem]").value = "");
};

const addLoading = () => {
  button.innerHTML =
    '<img src="../../images/Logos/loading.png" class="loading"></img>';
  button.style.background = "white";
};

const removeLoading = () => {
  button.innerHTML = "Enviar";
  limpaCampos();
  button.style.background = "none";
};

const handleSubmit = (event) => {
  addLoading();
  event.preventDefault();
  const Nome = document.querySelector("input[id=nome]").value;
  const Email = document.querySelector("input[id=email]").value;
  const Mensagem = document.querySelector("input[id=mensagem]").value;

  fetch("https://api.sheetmonkey.io/form/hehseaUrJFAn8EUGT8Wtmv", {
    method: "post",
    headers: {
      // prettier-ignore
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Nome,
      Email,
      Mensagem,
    }),
  }).then(() => removeLoading());
};

document.querySelector("form").addEventListener("submit", handleSubmit);
