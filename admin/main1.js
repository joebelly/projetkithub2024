//cette fonction affiche dans le console le score de l'utilisateur
function afficheResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".zoneScore span")

    let afficheScore = '${score} / ${nbMotsProposes}'

    spanScore.innerHTML = afficheScore
    console.log("votre score est de " + score + " sur " + nbMotsProposes)
}
//cette fonction demande a l'utilisateur de choisir entre "mots" et "phrase"
 
function choisirPhrasesOuMots() {
    let choix = prompt("Avec quelle liste desirez-vous jouer : 'mots' ou 'phrase'")

    while(choix !== "mots" && choix !== "phrase") {
        choix = prompt("Avec quelle liste desirez-vous jouer : 'mots' ou 'phrase'")
    }
    return choix
}