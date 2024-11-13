let inputEcrire = document.getElementById("inputEcrire")
console.log(inputEcrire)

let btnValiderMots = document.getElementById("btnValiderMots")
console.log(btnValiderMots)

let divzoneProposition = document.querySelector(".zoneProposition")
console.log(divzoneProposition)

let zonespan = document.querySelector(".zoneSaisie")
console.log(zonespan)

let listeRadio = document.querySelectorAll(".optionSource")
console.log(listeRadio)

// les commande sur l'image
let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")

// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)


let contenueTitre = "Azertype"
let contenueParagraphe = "L'application pour apprendre à taper plus vite !"

let div =  
     <div>
        <h1>${contenueTitre}</h1>
        <p>${contenueParagraphe}</p>
    </div>
    ;