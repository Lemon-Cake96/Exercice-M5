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

//item -> name variable for each value of elements within the array letters
letters.forEach((item) => {
    //console.log(item);
    //console.log(searching);
    //console.log(letters.indexOf(item));
    //console.log(letters.findIndex(item));

    if(item === searching){
        liste.push(item);

    }
});

console.log(liste);

//-----------------------------------------------------------------------------------//

//Exo 7

/* Problem to solve :

-We want to order an array through iteration, each loop the programs scans through the
array and every time compares both elements and keeps the bigger one.

*array with numbers to sort

*way to swap two elements
*/

//test:

let Liste_ordone = [4,8,6,10,12,1,3];

let elementArriere;
let elementDevant;

