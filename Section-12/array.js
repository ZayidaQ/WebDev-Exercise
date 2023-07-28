/*

    Author: Zhayida Haishan

    Description: creating guest lists

*/

// ------- working with Arrays - pt2 ------- //

/*
Adding element: example.push("add string here")
deleating elements: example.pop; //
*/
"use sprict";

let output = [] // this is an empty array
let count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        console.log(count);
    }

    count++;

    console.log(output)
}

fizzBuzz();