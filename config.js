// Liste des mots utilisés pour le jeu
const listeBonjr = ['Bonjour', 'Salut', 'Coucou']
const listeApres = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']

let monNombre = 1
// monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

function afficheUnNombre() {
    let monNombreLocal = 2
   // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    console.log("Intérieur de la fonction : ")
    console.log(monNombre) // monNombre est accessible
    console.log(monNombreLocal) // monNombreLocal est accessible
}

afficheUnNombre()
console.log("Extérieur de la fonction : ")
console.log(monNombre) // monNombre est accessible
console.log(monNombreLocal) // monNombreLocal n’est pas accesssible

// Liste des mots utilisés pour le jeu
const listeMots = ['Bonjour', 'Salut', 'Coucou']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']
console.log(listeMots)
console.log(listePhrases)
//cette variable va contenir le mot ou la phrase entre par l'utilisateur
let monUtilisateur;

//cette variable va contenir le score de l'utilisateur, il commence a zero

let score = 0;

//Tant que l'utilisateur n'a pas choisis "mots" ou "phrase", on lui redemande

let choix = prompt('voulez-vous jouer avec les mots (entrez "mots") ou les phrases (entrez "phrases?")')
while (choix !== 'mots' && choix !== 'phrases')
{
    choix = prompt('vous devez choisir entre "mots" et "phrases"')

}

// Si l'utilisateur a choisi "mots", on lui demandede taperles mots de la liste
if (choix == "mots")
{
    for (let i = 0; i < listeMots.length; i++)
    {
        monUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (monUtilisateur === listePhrases[i])
        {
            score++
        }
    }
}else {
    for (let i = 0; i < listePhrases.length; i++)
    {
        monUtilisateur = prompt("Entrez la phrase : " + listeMots[i])
        if (monUtilisateur === listePhrases[i])
        {
            score++
        }
    }
}

//on affiche le score de l'utilisateur
console.log(' votre score est de ' + score + ' sur ' + listeMots.length)
//on affiche le score de l'utilisateur

//partie de l'ulitiser getElementByID

let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);
//partie de recuperer Id
let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);
//partie de recuperer QuerySelectedAll

let listeInputRadio = Document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio)
// Partie de recuperer QuerySelectedAll NodeList
let listeh2 = document.querySelectorAll(h2)
console.log(listeh2)

//Partie d'utiliser boucle for
for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}