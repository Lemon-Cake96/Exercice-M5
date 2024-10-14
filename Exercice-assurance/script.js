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

console.log(TarifClient);
console.log(AgeBelow25);
console.log(AgeLicenseAbove2);
console.log(NumberOfAccidents);

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






