// Liste des mots utilisés pour le jeu
const listeMots = ['Bonjour', 'Salut', 'Coucou']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']

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
        
    }
}