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

//init neccesary variales

let AgeBelow25 = true;
let AgeLicenseAbove2 = false;
let NumberOfAccidents = 0;
let isOldMember = false;  //Has the client been assured for over a year
// const Tarif = ["a","b","c","d","refuse"]; //test for later
let TarifClient = "";

console.log(TarifClient);
console.log(AgeBelow25);
console.log(AgeLicenseAbove2);
console.log(NumberOfAccidents);

// test 1 :

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
} else if (AgeBelow25 === true && AgeLicenseAbove2 === false){
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
} else if (AgeBelow25 === true && AgeLicenseAbove2 === true){
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


console.log(TarifClient);




