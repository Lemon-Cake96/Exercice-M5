// exercice pendule 

const words = "hello"; //array of words

const erreurs_autorisees = 10;

function Pendule(){
    //first we pick a word to find

    let WordNumber = Math.floor(Math.random() * words.length);
    let choosedword = "hello" //words[WordNumber];

    //turn the choosedword into tiret
    let mot_tiret ="";
    for (let t = 0; t < choosedword.length; t++){
        mot_tiret += "-";
    }
    //console.log(mot_tiret) //works

    //test while loop

    while (new_mot !== choosedword){//add losing condition later
        

        let letter = window.prompt("Rentrez une lettre");//create conditions for prompt after

        for ( let i = 0; i < choosedword.length; i++){
            //console.log(i); //test word : "hello" so 0-4 loops
            if (letter === choosedword[i]){
                LetterSwapper(mot_tiret,mot_tiret[i],letter);
            } else {
                console.log("la lettre n'appartient pas au mot");
                
            }
        }

    }
}

//test function

function LetterSwapper(mot_tiret,tiret,letter){
    let new_mot = "";

    for ( let i = 0; i < mot_tiret.length; i++){
        //trouver le tiret  remplacer
        let underscore = mot_tiret[i];

        //le checkeur de quel tiret, il prendra la valeur de la boucle du pendule
        if (underscore === tiret){
            new_mot += letter; //letter choosed from prompt
        } else {
            new_mot += underscore; //keeps same underscores
        }
    }
    return new_mot
}

//test

//console.log(LetterSwapper("hello","l","-")); // works