// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
*/

// counter1 code
//This is more efficient bc it is not stored globally
//This is a higher order function
//this has closure
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// counter2 code - on global scope, if you want to use later on you have to create new variable
// STORED in global memory, not preferred, inefficient code
//THIS Does have closure ie access to count
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


/* Task 2: inning()

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be
a whole number between 0 and 2. */

function inning(min, max){
  let score = Math.floor(Math.random() * (max - min));
  return score;
}

// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a
number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(runs, num){

    let final = {
      'Home': 0,
      'Away': 0,
    }

    for(let i = 0; i < num; i++) {
      final.Home += runs(0, 3);
      final.Away += runs(0, 3);
    }
  return final;

  }


console.log(finalScore(inning, 9));

/* Task 4:

Create a function called `scoreboard` that accepts the following parameters:

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, number) {

  let finalRuns = {
    'Home': 0,
    'Away': 0,
  }

  for (let i = 0; i < number; i++) {
    finalRuns.Home = finalRuns.Home + getInningScore(0,3);
    finalRuns.Away = finalRuns.Away + getInningScore(0,3);
    if(i === 0) {
      console.log(`${i+1}st inning: Away Team: ${finalRuns.Away} - Home Team: ${finalRuns.Home}`)
    } else if (i===1) {
      console.log(`${i+1}nd inning: Away Team: ${finalRuns.Away} - Home Team: ${finalRuns.Home} `)
    } else if (i===2) {
      console.log(`${i+1}rd inning: Away Team: ${finalRuns.Away} - Home Team: ${finalRuns.Home} `)
    } else {
      console.log(`${i+1}th inning: Away Team: ${finalRuns.Away} - Home Team: ${finalRuns.Home} `)
    }
  }
  return `Final Score: Away: ${finalRuns.Away} - Home: ${finalRuns.Home}`
}

console.log(scoreboard(inning, 9));
/*
// Callback Function: A function passed as an argument to another function’s parameter. The function that gets passed is a callback function. The function it gets passed to is a higher-order function.
// To use a callback function:
// 1. Write a function with at least one parameter called “callback” or “cb” or something similar.
// 2. Write a 2nd function.
// 3. Invoke the first function with the 2nd function as one of the arguments so it gets passed into your “callback” parameter.


// Callbacks

let array1 = ["the","cake","is","a","lie"]

function runCallback (someArray, callback) {
  for (let i in someArray) {
    callback(someArray[i]);
  }
}

function logArrayItem (someStr) {
  console.log(someStr);
}

function logArrayItemUpper (someStr) {
  console.log(someStr.toUpperCase());
}

function alertArrayItem (someStr) {
  alert(someStr);
}

function alertArrayItemUpper (someStr) {
  alert(someStr.toUpperCase());
}

// runCallback(array1, alertArrayItemUpper);






// function inning(min,max) {
//   let score = Math.floor(Math.random() * (max - min));
//   return score;
// }

// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));
// console.log(inning(0,3));




// Higher-order (the glove)
const functionFeeder = function(callback,  name  ) {
  callback(`Hello, ${name}, from the inside of functionFeeder`);
};

// Alternate higher-order function (the glove)
const functionFeeder2 = function(callback) {
  callback(`Hello, Pace, from the inside of functionFeeder`);
};

// First callback (the hand)
const alertString = (string) => { // invoking the function
  alert(string); // alert a function that pops up a box in the browser.
};

// Second callback (the hand)
const logString = (string) => { // invoking the function
  console.log(string); // alert a function that pops up a box in the browser.
};

// functionFeeder(alertString, "dude");
// functionFeeder2(alertString);
// functionFeeder(logString, "dude");
// functionFeeder2(logstring);

// Follow-along
const elements = ['earth', 'wind', 'fire', 'water', 'heart'];

// Step 1
function showItem(array, index, cb) {
  cb(array[index]);
}

// Step 2
const alertIndex = (chosenItem) => {
  alert(chosenItem);
};

// OR
function logIndex(chosenItem) {
  console.log(chosenItem);
};

// Step 3
// const elements = ['earth', 'wind', 'fire', 'water', 'heart'];
//                   0      , 1     , 2     , 3      , 4

// showItem(elements, 4, alertIndex);
// showItem(elements, 2, alertIndex);
// showItem(elements, 0, logIndex);
// showItem(elements, 3, logIndex);

// for (let i = 0; i < 10 ; i += 2) {alert(elements[i])};

// elements.forEach(item => console.log(item));

// const newArray = elements.map(item => 'Element: ' + item);
// newArray.forEach(item => console.log(item));
*/
