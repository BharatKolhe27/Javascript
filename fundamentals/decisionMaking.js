let temp = 35;

if (temp > 40) {
    console.log("Too hot!");
} else if (temp > 30) {
    console.log("It's warm.");
} else {
    console.log("It's cold.");
}



let age = 19;
let hasTicket = true;

if (age >= 18) {
    if (hasTicket) {
        console.log("You can enter.");
    } else {
        console.log("You need a ticket.");
    }
}


let score = 45;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result); // "Fail"



let day = 2;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break; // Matches!
    default: console.log("Weekend");
}