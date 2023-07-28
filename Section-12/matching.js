prompt("Enter person number 1 Name:");
prompt("Enter person number 2 Name:");

let score = Math.random();
FinalScore = Math.floor(score * 100) + 1;

if (FinalScore > 70 ) {
    alert("you guys are a " + FinalScore + "% match! WOW ");
} else {
    alert("you guys are " + FinalScore + "% match!");
}