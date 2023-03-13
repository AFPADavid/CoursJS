document.addEventListener("DOMContentLoaded", function() { // Listener pour écouter le chargement de la page et n'executer le code qu'après que la page soit chargé


  // // Récupérer les éléments de la page
  // const alertButton = document.querySelector("#alert-button");
  const consoleButton = document.querySelector("#console-button");
  // const executeButton = document.querySelector("#execute-button");
  const consoleInput = document.querySelector("#console-input");

  // // Ajouter des écouteurs d'événements aux boutons
  // alertButton.addEventListener("click", function() {
  //   alert('Hello world!');
  // });

  consoleButton.addEventListener("click", function() {
    const DemoFormualire= consoleInput.value;
    let porteVariable = "Maxime";
    console.log("Ma constante de formulaire = " + DemoFormualire);
    if(DemoFormualire > 18){
      console.log("Majeur : "+DemoFormualire+" ans")
    }else{
      console.error("Mineur : "+DemoFormualire+" ans")
    }
    
  });

  // executeButton.addEventListener("click", handleClick);

  // // Exemple de fonction qui est exécutée au clic d'un bouton
  // function handleClick() {
  //   console.log("Le bouton a été cliqué !");
  // }

let i = "autre chose";

var maVariable; // Obsolète car on peut redéclarer la variable
var maVariable = 5
let maVariableAutre;  // Nouvelle déclaration de variable
let encoreVariable;
let toujoursVariable;

console.log(maVariableAutre);
maVariable2 = 10;
console.log(maVariableAutre);
// ici je récupère un nombre d'un forumlaire
maVariable2 = document.querySelector("#console-input").value; // Initialistion de la variable
console.log(maVariableAutre);

const maVariableConstant = "Constant";
console.log(maVariableConstant);

//maVariableConstant = "autre chose"; // NE marche pas
//console.log(maVariableConstant);  


// console.log(porteVariable);


// Boucle for
for (let i= 0; i < 5; i++) {
  console.log(i);
  // console.log(x)
}
console.log(i);


let x =1;
if(x > 2){
  console.log("tout va bien")
}else{
  console.error("Valeur trop basse")
}



console.log("Un log simple");
console.warn("Un warning");
console.error('Une erreur');

});
