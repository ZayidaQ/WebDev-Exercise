/*

    Author: Zhayida Haishan

    Description: creating guest lists

*/

// ------- working with Arrays ------- //

"use sprict";

// input
let guestList = ["Angela", "Jack", "pam", "James", "Lara", "Jason"];

let guestName = prompt("What is your name?");

// calculation
if (guestList.includes(guestName)) {
    alert("Welcome" + guestName)
} else {
    alert("sorry, try again..")
}