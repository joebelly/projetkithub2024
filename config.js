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