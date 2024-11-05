let monAge = 42
console.log(monAge)

/**javascript */

const monPrenom = "David"


const entreesPremiereSemaine = 1000
const entreesDeuxiemeSemaine = 2000
const totalEntrees = entreesPremiereSemaine + entreesDeuxiemeSemaine

console.log(totalEntrees)

/* Et voilà ! Vous avez fait votre première addition en JavaScript, félicitations 
! 🥳 Le principe est le même pour les autres opérations mathématiques qui auront chacun un opérateur : les soustractions  -  ,  les multiplications  *  , les divisions  /  .
Imaginez maintenant un autre cas de figure. Vous voulez connaître en direct le nombre de places vendues dans la journée. Vous avez une variable qui contient le nombre actuel de places vendues, et vous voulez lui ajouter
 le nombre de places vendues à l’instant dans le cinéma.
Vous écrivez donc */
let placesDejaVendues = 150
placesDejaVendues = placesDejaVendues + 10
/* Comme vous pouvez le constater, j’ai répété deux fois 
placesDejaVendues. Si j’avais écrit placesDejaVendues = 10, cela aurait écrasé la valeur 150 au lieu de réaliser une addition. Comme ce genre d’opération est très fréquent, JavaScript a créé des raccourcis
 pour les réaliser : les opérateurs d’affectation.*/

let placesDejaVendues = 150
placesDejaVendues += 10

