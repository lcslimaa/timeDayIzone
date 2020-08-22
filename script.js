const imagemSrc = document.getElementById("imagem");
const bodybody = document.getElementById("bodybody");
const horarioDoDia = document.getElementById("horarioDoDia");
const style = document.getElementById("style");

function getHorario() {
  var d = new Date();
  var horario = d.getHours();
  return horario;
}

function atualizaImagem() {
  var horario = 9;
  horarioDoDia.innerHTML = `Agora são: ${horario} horas`;

  if (horario >= 6 && horario < 12) {
    imagemSrc.src = "images/bomdia.jpg";
  } else if (horario >= 12 && horario < 18) {
    imagemSrc.src = "images/boatarde.jpg";
    bodybody.classList.add("orange");
  } else {
    imagemSrc.src = "images/boanoite.jpg";
    bodybody.classList.add("black");
  }
}

atualizaImagem();
