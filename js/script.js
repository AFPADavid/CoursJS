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
    

    // monAlerte()
    testAge(DemoFormualire);
    // monAlerte();
  });






  function monAlerte(){
    alert('Hello world!');
  }

  // executeButton.addEventListener("click", handleClick);

  // // Exemple de fonction qui est exécutée au clic d'un bouton
  // function handleClick() {
  //   console.log("Le bouton a été cliqué !");
  // }

let i = "autre chose";

var maVariable; // Obsolète car on peut redéclarer la variable
let maVariable2 = 5
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

/* jour 2  */

// Fonction 
// Boucle
// Manipulation DOM :
//                    CSS
//                    Append

// Fonction

// Déclaration d'une fonction qui affiche un message dans la console
function showMessage(message) {
  console.log("Message: " + message);
}

// Appel de la fonction avec un paramètre
showMessage("Bonjour, tout le monde!");



function testAge(age){
  // alert(message);
  console.log("Message : "+age);

  if(age > 18){
    console.log("Majeur : "+age+" ans");
    payerImpot();
  }else{
    console.error("Mineur : "+age+" ans")
    pasPayerImpot();
  }
}


function payerImpot(){
  alert('vous devez payer vos impôts !!!');
}

function pasPayerImpot(){
  alert('Vous êtes non imposable');
}


// Boucles

// Boucle for
for(let i = 0; i < 5; i++ ){
  console.log("Ma variable i = "+i);
}

// Boucle while
let j = 0;
while (j<5){
  console.log("Ma variable j = "+j);
  j++;
}

//La boucle while continue à s'exécuter tant que la condition est vraie.
//Dans l'exemple ci-dessus, la boucle commence avec i initialisé à 0.
//La condition de la boucle est i < 5, ce qui signifie que la boucle continuera à s'exécuter tant que i est inférieur à 5.
//À chaque itération de la boucle, i est incrémenté de 1 à l'aide de i++.

// Boucle do-while
let k = 0;
do{
  console.log("Ma variable k = "+k);
  k++;
} while( k < 5);
//La boucle do-while est similaire à la boucle while, mais la condition est vérifiée à la fin de chaque itération de la boucle
//plutôt qu'au début. Cela signifie que le code à l'intérieur de la boucle sera exécuté au moins une fois,
//même si la condition est fausse dès le départ. Dans l'exemple ci-dessus, la boucle commence avec j initialisé à 0.
///Le code à l'intérieur de la boucle est exécuté une première fois avant que la condition j < 5 ne soit vérifiée.
//À chaque itération de la boucle, j est incrémenté de 1 à l'aide de j++, et le code à l'intérieur de la boucle est exécuté tant
//que la condition est vraie.



// Manipulation du DOM
  // CSS

function manipulateDiv(){
  const myDiv = document.querySelectorAll(".manipulate");

  myDiv.forEach((div) => {
    // Remplace du texte dans la div
    div.textContent = "Contenu remplacé en JS";

    // Modifier le style de la div
    div.style.backgroundColor = "red";
    div.style.fontSize = "35px";

    div.classList.add("nouvelleClass");
  })

}

manipulateDiv();

/*

Explication de la fonction :

La fonction utilise document.querySelectorAll pour sélectionner toutes les divs avec la classe "manipulate".
Elle itère sur chaque div à l'aide de forEach.
Pour chaque div, la fonction ajoute du texte en utilisant la propriété textContent.
La fonction modifie le style de la div en utilisant les propriétés backgroundColor et fontSize.
Elle ajoute également une nouvelle classe CSS à la div en utilisant classList.add.
Vous pouvez appeler cette fonction dans votre script JavaScript ou à partir d'un bouton ou d'un autre événement en utilisant onclick ou un écouteur d'événement.

*/

  // Append
 
  // Récupérer la div parent
  const parentDiv = document.getElementById("container");

  // Créer une nouvelle div
  const newDiv = document.createElement("div");

  // Créer un nouveau paragraphe
  const newPara = document.createElement("p");
  newPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  // Créer une nouvelle image
  const newImage = document.createElement("img");
  newImage.src = "https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1678709047967";

  // Ajouter le paragraphe à la nouvelle div
  newDiv.appendChild(newPara);
  newDiv.appendChild(newImage);


  // Ajouter la nouvelle div à la div parent
  parentDiv.appendChild(newDiv);


});
