console.log("hello word");

for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
    console.log(compteur)
}

// entame la boucle for
for (let i = 0; i < 3; i++) {
    console.log(i)
}
//entame le boucle "while"
let i = 0
while (i < 3) {
    console.log(i)
    i++
}

//Entame function

function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    return message
}
let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)

// Liste des mots utilisés pour le jeu
const listeMots = ['Bonjour', 'Salut', 'Coucou']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']

console.log(listeMots)
console.log(listePhrases)