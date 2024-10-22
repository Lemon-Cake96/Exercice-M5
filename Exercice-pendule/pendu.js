// exercice pendule 

const words = "hello"; //array of words

const erreurs_autorisees = 10;

function Pendule(){
    //first we pick a word to find

    //let WordNumber = Math.floor(Math.random() * words.length);
    let choosedword = "hello"; //words[WordNumber];

    //turn the choosedword into tiret
    let mot_tiret ="";
    for (let t = 0; t < choosedword.length; t++){
        mot_tiret += "-";
    }
    //console.log(mot_tiret) //works

    //test init
    new_mot = mot_tiret;

    let letterUsed = "";
    let compter = 0;

    //console.log(new_mot); //works

    //test while loop

    while (new_mot !== choosedword){//add losing condition later

        console.log(new_mot);

        let letter = window.prompt("Rentrez une lettre");//create conditions for prompt after

        for ( let i = 0; i < choosedword.length; i++){
            //console.log(i); //test word : "hello" so 0-4 loops
            if (letter === choosedword[i]){
                new_mot = LetterSwapper(new_mot,i,letter);
            } else if (i === choosedword.length){
                console.log(`la lettre ${letter} n'appartient pas au mot`);
                compter++

            }
        }
        letterUsed += letter;
        //console.log(letterUsed); 
        console.log("Vous avez essaye les lettres suivantes : " + letterUsed);
        console.log("Vous avez commis " + compter + " erreurs.");
    }
    
    if (new_mot === choosedword){
        console.log("Vous avez trouvé le mot " + choosedword);
    }
}

//test function

function LetterSwapper(mot_tiret,IndexToSwap,letter){ //test : currently works
    let new_mot = "";

    for ( let i = 0; i < mot_tiret.length; i++){ // avec test : pour boucle 0
        
        let iChar = mot_tiret[i]; 

        if ( i === IndexToSwap){
            new_mot += letter;
        } else {
            new_mot += iChar;
        }

    }
    return new_mot
}

//test

//console.log(LetterSwapper("hello","l","-")); // works
//console.log(LetterSwapper(words,words[2],"-"));// works

//problem : when the word is made out of the same single letter "-" it swaps the whole thing

// new_mot ="-----"
// letter ="h"
// choosedword ="hello"
// console.log(LetterSwapper(new_mot,0,letter)); // works


//Game test

Pendule();