// Sélectionne un mot aléatoire dans le tableau wordsArray
//const index = Math.floor(Math.random() * wordsArray.length);
console.log("hello world")
const mot_a_trouver = "hello"; //wordsArray[index];
const longueur = mot_a_trouver.length;
const erreurs_autorisees = 10;
let erreurs_commises = 0;
 
// Initialise le mot à trouver avec des tirets
let mot_trouver = underscore(mot_a_trouver);
 
// Fonction pour remplacer chaque lettre du mot par un tiret
function underscore(mot_a_trouver) {
    let mot_trouver = "";
    for (let i = 0; i < mot_a_trouver.length; i++) {
        mot_trouver += "- ";
    }
    return mot_trouver;
}
 
// Boucle principale du jeu
while (mot_trouver.replace(/ /g, '') !== mot_a_trouver && erreurs_commises < erreurs_autorisees) {
    // Demande à l'utilisateur d'entrer une lettre
    let lettre = window.prompt("Entrez une lettre :");
    if (lettre && lettre.length === 1) {
        // Si la lettre est dans le mot à trouver
        if (mot_a_trouver.includes(lettre)) {
            // Remplace les tirets par la lettre correcte
            for (let i = 0; i < mot_a_trouver.length; i++) {
                if (mot_a_trouver[i] === lettre) {
                    mot_trouver = mot_trouver.substring(0, 2 * i) + lettre + mot_trouver.substring(2 * i + 1);
                }
            }
        } else {
            // Si la lettre n'est pas dans le mot, incrémente les erreurs
            console.log(`La lettre ${lettre} n'est pas dans le mot.`);
            console.log(`On trace un trait de plus sur la potence!`);
            erreurs_commises++;
        }
        // Affiche le mot avec les lettres trouvées et les tirets restants
        console.log(mot_trouver);
    } else {
        // Si l'utilisateur n'entre pas une seule lettre
        console.log("Veuillez entrer une seule lettre.");
    }
}
 
// Vérifie si l'utilisateur a trouvé le mot ou a épuisé ses tentatives
if (mot_trouver.replace(/ /g, '') === mot_a_trouver) {
    console.log("Félicitations ! Vous avez trouvé le mot : " + mot_a_trouver);
} else {
    console.log("Dommage ! Le mot à trouver était : " + mot_a_trouver);
}