 const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const pregunta = document.getElementById("pregunta");
const message = document.getElementById("message");
const audio = document.getElementById("audio");

let yesSize = 16;
let noSize = 16;

yesBtn.style.fontSize = yesSize + "px";
noBtn.style.fontSize = noSize + "px";

function moverNoBtn() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("click", () => {
  noSize -= 2;
  if (noSize < 5) noSize = 5;
  noBtn.style.fontSize = noSize + "px";
  alert("¿Segura? Intenta de nuevo 😅");
  moverNoBtn();
});

noBtn.addEventListener("mouseover", moverNoBtn);

yesBtn.addEventListener("click", () => {
  yesSize += 5;
  yesBtn.style.fontSize = yesSize + "px";

  pregunta.textContent = "¡Sabía que dirías que sí! 💍💖";
  message.textContent = "¡Gracias por aceptar! 🎉";

  audio.currentTime = 0;
  audio.play();

  // Crear corazones en toda la pantalla
  crearCorazones(30); // cantidad de corazones
});

function crearCorazones(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.textContent = "❤️";

    // Posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + "vw";
    // Retraso de animación aleatorio para que no caigan todos igual
    corazon.style.animationDelay = (Math.random() * 4) + "s";
    // Tamaño aleatorio
    corazon.style.fontSize = (12 + Math.random() * 24) + "px";

    document.body.appendChild(corazon);

    // Quitar el corazón después de la animación (4 segundos)
    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }
}
