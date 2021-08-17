// Interaction avec l'utilisateur
// alert("Message"); 
// prompt("Quel nombre");
// confirm("Etes vous sur");

// const maVariable = "Bonjour ! ";
// console.log(maVariable);
// let maVariable2 = 7;
// console.log(maVariable2);
// maVariable2 = 8;
// console.log(maVariable2);
// console.log("Brouette");

// Operation de base +, -, *, /
// let nombre1 = 12;
// let nombre2 = 25;
// let nombre = nombre1 + nombre2;
// nombre = nombre1 + nombre2;
// nombre = nombre + 3;

// console.log(nombre);

// let nom = "Papini";
// let prenom = "Christian";
// let phrase = `Bonjour ${prenom} ${nom}` ;
// console.log(phrase);

// let tableau = [10, "Salut", true];
// tableau.unshift("Bonjour");

// console.log(tableau);

// let lunettes = "je prends mes lunettes";
// let manteau = "Je prends mon manteau";
// let beau = "Si le temps est beau:";
// let pasBeau = "Si le temps n'est pas beau";
// let phrase = `${beau} ${lunettes}`;
// let phrase2 = `${pasBeau} ${manteau}`;
// const soleil = "soleil";
// const pluie = "pluie";

// if(pluie == "soleil"){
//     console.log(phrase);
// }
// else{
//     console.log(phrase2);
// }

// for(let compteur = 0; compteur <= 100; compteur += 2){
//     console.log(compteur);
// }
// let pass = "azerty";
// while(pass != "passe"){
//     pass = prompt("Entrez le mot de passe");  
//     console.log("OK");
// }
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}