//Exercice pendule

const erreurs_autorisees = 10;

const words = ["hello","world","friends","lads"];


//Choosing a word to find from a given array.

function WordChooser(Array){
    let choosedword;
    //picks a random number based on how many elements an array has
    
    let i = Math.floor(Math.random() * Array.length);
    //console.log(i);
    
    //sets the number generated to an element index of the array
    
    choosedword = Array[i];
    //console.log(choosedword);
    return choosedword;
}

//console.log(WordChooser(words));
//WordChooser(words); //works

//

function Pendule(){
    erreurs_autorisees;
    let erreurs_comises = 0;
    let mot_a_trouver = "kaique" //WordChooser(words);
    //console.log(mot_a_trouver);
    let mot_trouve = HiddenWordMaker(mot_a_trouver);
    console.log(mot_trouve);
    let test = mot_a_trouver.length;


    // while ((mot_trouve !== mot_a_trouver) && (erreurs_comises !== erreurs_autorisees)){
    //     let letter; //prompt



    // }
}

function HiddenWordMaker(word){
    let hiddenword =""
    for (i = 0; i < word.length; i++){
        //console.log(i);
        hiddenword += "-"
    }
    return hiddenword;
}

//console.log(HiddenWordMaker("Hello"));// works

function lettres_places(mot_complet,lettres_trouvees){

}
