/* Problem to solve :

-We have 4 different prices, each have their own conditions based on :
*Age of conductor
    *Below 25 years
    *Above 25
*Age of license
    *Below 2 years
    *Above 2 ""
*Number of Accidents
*Contract > 12m = cheaper tier

-We have 5 tiers of prices (from cheapest to expensive):
*A
*B
*C
*D
*Refusé

*/

//init form values
let Age ="";
let AgeLicense ="";


//init neccesary variales

let AgeBelow25 = false;
let AgeLicenseAbove2 = false;
let NumberOfAccidents = 0;
let isOldMember = false;  //Has the client been assured for over a year
// const Tarif = ["a","b","c","d","refuse"]; //test for later
let TarifClient = "";

//console.log(TarifClient);
//console.log(AgeBelow25);
//console.log(AgeLicenseAbove2);
//console.log(NumberOfAccidents);

// test 1 : works

if ( AgeBelow25 === true && AgeLicenseAbove2 === false ){
    switch (NumberOfAccidents){
        case 0:
            TarifClient = "D";
            break;
        default:
            TarifClient = "refuse";
    }
} else if (AgeBelow25 === true && AgeLicenseAbove2 === true){
    switch (NumberOfAccidents){
        case 0:
            TarifClient = "C";
            break;
        case 1:
            TarifClient = "D";
        default:
            TarifClient = "refuse"
    }
} else if (AgeBelow25 === false && AgeLicenseAbove2 === false){
    switch (NumberOfAccidents){
        case 0:
            TarifClient = "C";
            break;
        case 1:
            TarifClient = "D";
            break;
        default:
            TarifClient = "refuse";
    }
} else if (AgeBelow25 === false && AgeLicenseAbove2 === true){
    switch (NumberOfAccidents){
        case 0:
            TarifClient = "B";
            break;
        case 1:
            TarifClient = "C";
            break;
        case 2:
            TarifClient = "D";
            break;
        default:
            TarifClient = "refuse";
    }
}

//Bonus price range based on membership age

if (isOldMember === true){
    switch (TarifClient){
        case "D":
            TarifClient = "C";
            break;
        case "C":
            TarifClient = "B";
            break;
        case "B":
            TarifClient = "A";
        default:
            TarifClient = "refuse";   
    }
}

console.log(TarifClient);


//-------------------------------------------------------------//

// exo Photocopie -----
console.log("Exo photocopies");

/*problem to solve :

-photocopie coute 10 cents, 9 cents les vingts et 20> = 8 cents

*Nombre de photocopies

*/

// init la variable 

let Nphotocopies = 31

// test 1:

// function PrixPhotocopie(Nphotocopies){
//     let prix = 0;

//     if (Nphotocopies > 10 ){
//         prix = Nphotocopies*0.1;
//     } else if (Nphotocopies > 30) {
//         prix = Nphotocopies*0.1;
//         Nphotocopies-10;
//         prix = Nphotocopies*.09 + 1;
//     } else if (Nphotocopies > 20){

//     }
//     console.log(prix);
//     return prix;
// }

// test 2:

function PrixPhotocopie(Nphotocopies){
    let prix = 0;
    while (Nphotocopies>30){
        prix += 0.08;
        Nphotocopies--;
        //console.log(Nphotocopies);
    }
    //console.log(prix); // works
    
    while (Nphotocopies>10){
        Nphotocopies--;
        //console.log(Nphotocopies);
        prix += 0.09;
    }

    while (Nphotocopies>0){
        Nphotocopies--;
        //console.log(Nphotocopies);
        prix += 0.1;
    }

    //.toFixed() 
    return prix.toFixed(2);
}


console.log(PrixPhotocopie(Nphotocopies));

//console.log(prix);

//----------------------------------------------------------------------//


//Exercise 3:
console.log("Exo TAXES")

/* problem to solve :

-Know if a user must pay taxes based on :

*Sex:
    *Male
    *Female :
        *Age >18 pay taxes
        *Age < 35 pay taxes


*/

//init variables

let sex = true;
let age = 45;
let taxes ="";

if (sex === false && age > 18){
    taxes ="Vous etes taxable";
} else if (sex===true){
    if ( age > 18){
        taxes = "Vous etes taxable";
    } else {
        taxes = "Vous n'etes pas taxable"
    }

    if (age < 35){
        taxes = "Vous etes taxable";
    } else {
        taxes = "Vous n'etes pas taxable"
    }

}

console.log(taxes);



// ----------------------------------------------------------------------//

//exo 4 
console.log("Exo 4");

//Make a star "*" pyramid

let PyramidFloors = 10;

for (let i = PyramidFloors; i > 0 ; i--){
    //console.log(i);
    let star = "*";
    star += star.repeat(i-1);
    console.log(star);
}

//console.log(star);

//---------------------------------------------------------------------------//

// exo 5

console.log("Exo 5");

for (let i = 0; i < PyramidFloors ; i++){
    //console.log(i);
    let star = "*";
    star += star.repeat(i);
    console.log(star);

}


//------------------------------------------------------------------------//

//Exo 6

/* Problem to solve :

-we have an array with elements on it, and we want to push to an different array
the indexes of something we searched on the first one.

*2 Arrays
    *one with elements
    *empty

*variable to store what we search

*way to search or match within an array
    *array.fin()
    *array.forEach()

*/

console.log("Exo 6")

//init variables
const letters = ["a","b","b","c","d","b","a","c","b"];

let searching ="b";

// array to store what we find
let liste = [];

// console.log(searching)


// function searcher (item){
//     item === searching;
//     console.log(item)
// }

//test 1:

//item -> name variable for each value of elements within the array letters
// letters.forEach((item) => {
//     //console.log(item);
//     //console.log(searching);
//     //console.log(letters.indexOf(item));
//     //console.log(letters.findIndex(item));
//     let indexitem = letters.indexOf(item);
//     if(item === searching){
//         liste.push(item);

//     }
// });

// test 2:

function arraySeacher(item,array){
    let indexitem = array.indexOf(item);
    console.log(indexitem)

    while(indexitem != -1){
        liste.push(`${item} est trouve au rang ` + indexitem);
        indexitem = array.indexOf(item, indexitem + 1);
    }
    return liste;
}


console.log(arraySeacher(searching,letters));

//-----------------------------------------------------------------------------------//

//Exo 7

/* Problem to solve :

-We want to order an array through iteration, each loop the programs scans through the
array and every time compares both elements and keeps the bigger one.

*array with numbers to sort

*way to swap two elements
*/

console.log("Exo 7");

//test:

let Liste_ordone = [10,8,6,7,9,12,1,3];

let memoire;

//creation de la boucle

function Trieur(array){
    let memoire;
    for (let i=0; i< array.length;i++ ){ // it might not fully loop thro the whole array after a swap ? fixed
        //console.log(i);
        //console.log(i+1);
        for (let k = 0; k < array.length; k++){ //new loop
            if (array[k] > array[k+1]){
                memoire = array[k];
                array[k] = array[k + 1];
                array[k + 1] = memoire;    
            }
        }
    }
    return array
}

console.log(Liste_ordone);
console.log(Trieur(Liste_ordone));
//works fixed


//-----------------------------------------------------------------------------------//

//Exo 7

/* Problem to solve:

-We want to check if a given word is a "Palindrome", it reads the same from both ways.

*2 variables:
    *main word
    *main word reversed (find a way to reverse the word)

compare both words if they are the same then they are palindrome or not.

test 1:
string.split(): turns into array of letters
array.reverse(): sorts indexes from last to first
array.join(): joins the elements into single string

test 2:



*/

console.log("Exo 7");

let MainWord = "anna"; //prompt if needed

function isPalindrome(MainWord){
    let reverseWord;
    
    reverseWord = MainWord.split("");
    //console.log(reverseWord);
    reverseWord = reverseWord.reverse();
    //console.log(reverseWord);
    reverseWord = reverseWord.join(""); //if left empty it adds a ","
    //console.log(reverseWord);
    if (MainWord === reverseWord){
        console.log("Votre mot est un palindrome.");
        return true;
        
    }
    console.log("Votre mot n'est pas un palindrome.")
    return false;
}

console.log(isPalindrome(MainWord));

//----------------------------------------------------------------------------//

//exo Tour 

console.log("Exercice Tours de Hanoi");

/* Problem to solve :

-we must create a function that solves the game, the rules of the game:
    -3 pilars (Astart,Bmemory,Cfinish)
    -a n amount of rings ordered from biggest to smallest
    -goal of the game to move all the rings from Astart to Cfinish
    -can only move one ring at the time
    -the order of size must be preserved at all times

*Algorithme:
algo dans wikiapedia

*/ 

//init variables

//test
let NombreEtages = 3; //window.prompt("Nombre d'etages de votre tour");

let piliers = ["A","B","C"];

function ResoHanoi (etages,pilier1,pilier2,pilier3){ //mouvement debut ABC
    if (etages > 0){
        ResoHanoi(etages -1,pilier1,pilier3,pilier2);//mouvement 2eme appel ACB
        console.log(`disque de taille ${etages}, ${pilier1} vers ${pilier3}`);
        ResoHanoi(etages - 1,pilier2,pilier1,pilier3);//mouvement 3eme appel BAC
    }
}



ResoHanoi(NombreEtages,piliers[0],piliers[1],piliers[2]);

//-----------------------------------------------------------------------//

//Exo 9

console.log("Exercice 9");

/* problem to solve:

-We want to create a string of chars that change every second line

*/

//init 

let LinesAmount = 6; //window.prompt("How many lines ?")

function LineMaker(LinesAmount){
    for (let i = 0 ; i < LinesAmount; i++ ){
        //console.log(i);
        if (i%2 === 0){
            console.log("#*#*#*#*#*");
        }else{
            console.log("*#*#*#*#*#");
        }
    }
    return console.log(`Vous vouliez ${LinesAmount} ligne/s.`)
}

LineMaker(LinesAmount);

//----------------------------------------------------------------------------------//

//exo 10

console.log("Exercice ecriture mots");

/* Problem to solve:

-We want to rewrite a given word by moving the index of letters by an "n" amount.

*array of alphabet
*given word

*push word letters into differet array, array.push()
*convert the array into string, array.join()

*/

//init

const Alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

let Word = "banane"; //prompt if needed
let motdecaleNumber = 3; //prompt if needed

function CreateurDeMotDecale(Word,Number){
    //console.log(Alphabet);
    //console.log(Number);
    let finalwordarray = [];
    let NewWordArray = Word.split(""); //if left empty it splits word per word
    //console.log(NewWordArray);
    NewWordArray.forEach(element => { 
        //console.log(element);
        for (let i = 0; i < Alphabet.length; i++){
            //console.log(i)
            if (element === Alphabet[i]){
                console.log(`letter ${element} is number ${i} of alphabet`);
                finalwordarray.push(Alphabet[i+Number]);

            }

        }
    });
    //console.log(finalwordarray);
    finalword = finalwordarray.join("");
    return finalword;

}

console.log(CreateurDeMotDecale(Word,motdecaleNumber));

//------------------------------------------------------------------------------//

//Exo 11

console.log("Exercice 11");

/* problem to solve:

-Look exercices 4 and 5.

*Must not use the string.repeat() method

*/

//PyramidFloors already defined by the previous exercice

function PyramidMaker(){
    let star = "*";
    console.log(star);
    //console.log(star);
    for (let i=0; i < PyramidFloors-1; i++){
        star += "*";
        console.log(star);
    }
}

PyramidMaker();

//----------------------------------------------------------------------------//

//Exo 12

console.log("Exercice 12");

function RevPyramidMaker(PyramidFloors){
    let star ="*";
    for (let i = PyramidFloors; i > 0; i--){
        let j = i;
        while(j>0){
            let sentence ="";
            sentence += star;
            j--
        }

    }


}

RevPyramidMaker(PyramidFloors);

//-----------------------------------------------------------------------------------//

//Exercice 13

console.log("Exercice 13");



//----------------------------------------------------------------------------------//

//Exo Etudiants

console.log("Exo Etudiants");

/* Problem to solve:

-We have an array of objects, each with 2 properties, name and note.
-we want to keep ones with note above 15
-from the ones kept we want to sort them by name
-lastly calculate their average
*/

let etudiants = [
    { nom:"Agathe", note: 15},
    { nom:"Wlad", note: 16},
    { nom:"Kaique", note:17},
    { nom:"emmanuel", note:18},
    { nom:"Sylvain", note:19},
    { nom:"Yann", note:15},
    { nom:"yannick", note:16},
    { nom:"Jeremy", note:17},
    { nom:"Angelique", note:18},
    { nom:"Laureline", note:19},
    { nom:"Dorian", note:15},
    { nom:"Chris", note:16},
    { nom:"Amin", note:17},
    { nom:"Yohan", note:18},
];
// New student list :

const NewEtudiants = [
    { nom: "Alice", note: 85 },
    { nom: "benjamin", note: 92 },
    { nom: "Claire", note: 78 },
    { nom: "david", note: 88 },
    { nom: "Emma", note: 95 },
    { nom: "fabien", note: 67 },
    { nom: "Gabriel", note: 90 },
    { nom: "helene", note: 73 },
    { nom: "Isabelle", note: 82 },
    { nom: "jacques", note: 76 },
    { nom: "Kevin", note: 89 },
    { nom: "laura", note: 91 },
    { nom: "Marc", note: 84 },
    { nom: "nathalie", note: 79 },
    { nom: "Olivier", note: 87 },
    { nom: "pierre", note: 93 },
    { nom: "Quentin", note: 80 },
    { nom: "roxane", note: 77 },
    { nom: "Sophie", note: 94 },
    { nom: "thomas", note: 86 },
    { nom: "Ulysse", note: 81 },
    { nom: "valerie", note: 75 },
    { nom: "William", note: 83 },
    { nom: "xavier", note: 70 },
    { nom: "Yann", note: 88 },
    { nom: "zoe", note: 92 },
    { nom: "Adrien", note: 85 },
    { nom: "brigitte", note: 78 },
    { nom: "Camille", note: 89 },
    { nom: "damien", note: 91 },
    { nom: "Elise", note: 87 },
    { nom: "françois", note: 76 },
    { nom: "Gaëlle", note: 84 },
    { nom: "hugo", note: 93 },
    { nom: "Ingrid", note: 79 },
    { nom: "julien", note: 88 },
    { nom: "Karine", note: 82 },
    { nom: "lucas", note: 90 },
    { nom: "Mathilde", note: 95 },
    { nom: "nicolas", note: 77 },
    { nom: "Océane", note: 86 },
    { nom: "paul", note: 80 },
    { nom: "Quentin", note: 83 },
    { nom: "rachel", note: 75 },
    { nom: "Samuel", note: 92 },
    { nom: "thibault", note: 89 },
    { nom: "Ursula", note: 78 },
    { nom: "vincent", note: 91 },
    { nom: "Wendy", note: 87 },
    { nom: "xena", note: 76 },
    { nom: "Yasmine", note: 84 },
    { nom: "zacharie", note: 93 },
    { nom: "Amélie", note: 79 },
    { nom: "bruno", note: 88 },
    { nom: "Chloé", note: 82 },
    { nom: "dylan", note: 90 },
    { nom: "Estelle", note: 95 },
    { nom: "fabrice", note: 77 },
    { nom: "Géraldine", note: 86 },
    { nom: "henri", note: 80 },
    { nom: "Inès", note: 83 },
    { nom: "jean", note: 75 },
    { nom: "Kévin", note: 92 },
    { nom: "léa", note: 89 },
    { nom: "Mélanie", note: 78 },
    { nom: "nathan", note: 91 },
    { nom: "Ophélie", note: 87 },
    { nom: "patrick", note: 76 },
    { nom: "Quentin", note: 84 },
    { nom: "rémi", note: 93 },
    { nom: "Sarah", note: 79 },
    { nom: "théo", note: 88 },
    { nom: "Ugo", note: 82 },
    { nom: "valentin", note: 90 },
    { nom: "Wendy", note: 95 },
    { nom: "xavier", note: 77 },
    { nom: "Yohan", note: 86 },
    { nom: "zoé", note: 80 },
    { nom: "Antoine", note: 83 },
    { nom: "bernadette", note: 75 },
    { nom: "Cédric", note: 92 },
    { nom: "diane", note: 89 },
    { nom: "Élodie", note: 78 },
    { nom: "franck", note: 91 },
    { nom: "Guillaume", note: 87 },
    { nom: "hélène", note: 76 },
    { nom: "Isabelle", note: 84 },
    { nom: "jules", note: 93 },
    { nom: "Kevin", note: 79 },
    { nom: "laetitia", note: 88 },
    { nom: "Maxime", note: 82 },
    { nom: "nadine", note: 90 },
    { nom: "Olivier", note: 95 },
    { nom: "pascal", note: 77 },
    { nom: "Quentin", note: 86 },
    { nom: "romain", note: 80 },
    { nom: "Stéphanie", note: 83 },
    { nom: "thomas", note: 75 },
    { nom: "Ulysse", note: 92 },
    { nom: "valérie", note: 89 }
];

//Keep ones with note > 15 

let GoodEtudiants =[]; //new array

for(let i = 0; i< etudiants.length;i++){//iterates however many students there are
    //console.log(i);
    if (etudiants[i].note > 15){//i is variable, therefore it be used to track what index are we on
        GoodEtudiants.push(etudiants[i]);
    }
}

console.log(GoodEtudiants); 

//sort them by Name

//step 1: convert everything to lower case, cant use methods.

const Alpha = "abcdeéèfghijklmnopqrstuvwxyz";
const UAlpha ="ABCDEÉÈFGHIJKLMNOPQRSTUVWXYZ";
const SpeChar ="ÉÈÊËéèêë"

function LetterConvMiniscule(letter){
    for (let a =0; a < SpeChar.length; a++){
        if (letter === SpeChar[a]){
            letter = "e"
        }
    }
    for (let i=0; i < UAlpha.length; i++){
        //console.log(i);
        if(UAlpha[i]=== letter){
            //console.log(Alpha[i]);
            return Alpha[i];
        } else if (Alpha[i]===letter){
            return Alpha[i];
        }
    }
    return letter;
}



// console.log(LetterConvMiniscule("H"));//"H" returns "h" and "h" returns "h" Works.

// step 2 Now we convert whole string 

function WordConvMinscule(word){
    let convertedword ="";
    for (let i=0; i < word.length;i++){
        //console.log(i);
        //console.log(word[i]);
        //console.log(LetterConvMiniscule(word[i]));
        convertedword += LetterConvMiniscule(word[i]);
    }
    return convertedword;
}


//console.log(WordConvMinscule("KAIQUE"));//works

//step 3 now that we can convert every name to lower case we can compare them

function TrieurEtudiants(array) {
    //let name1;
    //let name2;
    let memo;
    for (let i = 0; i < array.length; i++){
        //console.log(i);
        //console.log(WordConvMinscule(GoodEtudiants[i].nom)); // works
        for (let l = 0; l < array.length - 1; l++){
            // name1 = WordConvMinscule(GoodEtudiants[l].nom);
            // name2 = WordConvMinscule(GoodEtudiants[l + 1].nom);
            // console.log(name1);
            // console.log(name2);
            if (WordConvMinscule(array[l].nom) > WordConvMinscule(array[l+1].nom)){
                // console.log(l); //works
                // console.log(WordConvMinscule(array[l].nom));
                // console.log(WordConvMinscule(array[l+1].nom));
                memo = array[l]; /*earlier version: memo = array[l].nom trying to re assign only
                the names of each member and not the whole student (NAME and NOTES)*/
                array[l] = array[l+1];
                array[l+1] = memo;
            }

        }
    }
    return array;
}

console.log(TrieurEtudiants(GoodEtudiants));
console.log(TrieurEtudiants(NewEtudiants));



//calculate average

//tests

// let keke = Boolean;
// console.log(keke);
// keke = 10; //returns 10, no errors
// console.log(keke);


let moyenne = Number;
let sommeNotes = 0;

for (let i=0;i<GoodEtudiants.length;i++){
    //console.log(i);
    sommeNotes += GoodEtudiants[i].note;
    //console.log(sommeNotes);
}
moyenne = sommeNotes/GoodEtudiants.length;

console.log(moyenne);