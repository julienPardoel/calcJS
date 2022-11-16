// console.log("hello");

const touches = [...document.querySelectorAll(".bouton")];
// console.log(touches);

const listeKeycode = touches.map((touche) => touche.dataset.key);
// console.log(listeKeycode);

const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  //   console.log(valeur);
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  //   console.log(valeur);
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    // console.log(listeKeycode);
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};
