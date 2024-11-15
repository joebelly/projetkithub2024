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
let titrePage = "le titre de ma page"
let h1 = document.createElement("h1")
h1.innerText = titrePage
//let body = document.querySelector("body")
body.appendChild(h1)

let contenueTitre = "le titre de ma page"
let contenueParagraphe = "le titre de ma paragraphe"
let body = document.querySelector("body")
let html = `
    <header>
        <h1>${contenueTitre}</h1>
        <p>${contenueParagraphe}</p>
    </header>
    `
body.innerHTML = html


//Une petite liste des sujets plus ou moins important dans Angular

	1. Introductions https://angular.dev/overview
	2. Componennts https://angular.dev/guide/components
	3. Templates https://angular.dev/guide/templates
	4. Directives https://angular.dev/guide/directives
	5. Dependency Injection https://angular.dev/guide/di
	6. Routing https://angular.dev/guide/routing
	7. Forms https://angular.dev/guide/forms
	8. HTTP Client https://angular.dev/guide/http



