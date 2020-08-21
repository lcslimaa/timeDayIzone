const imagemSrc = document.getElementById("imagem");
const horarioDoDia = document.getElementById("horarioDoDia");
const style = document.getElementById("style");

function getHorario() {
  var d = new Date();
  var horario = d.getHours();
  return horario;
}

function atualizaImagem() {
  var horario = getHorario();
  horarioDoDia.innerHTML = `Agora são: ${horario} horas`;

  if (horario >= 6 && horario < 12) {
    imagemSrc.src = "images/bomdia.jpg";
  } else if (horario >= 12 && horario < 18) {
    imagemSrc.src = "images/boatarde.jpg";
    style.href = "style/style2.css";
  } else {
    imagemSrc.src = "images/boanoite.jpg";
    style.href = "style/style3.css";
  }
}

atualizaImagem();
