import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const fourteen = fifaData.find(game => game.Year === 2014 && game.Stage === "Final")
console.log(`The Home team was: ${fourteen["Home Team Name"]}
The Away Team was: ${fourteen["Away Team Name"]}
Home Team Goals: ${fourteen["Home Team Goals"]}
Away Team Goals: ${fourteen["Away Team Goals"]}
`)
if (fourteen["Home Team Goals"] > fourteen["Away Team Goals"]){
    console.log(fourteen["Home Team Name"])
} else {
    console.log(fourteen["Away Team Name"])
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(game => game["Stage"] === "Final")
};
console.log(getFinals(fifaData))
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let years = cb.map(game => game["Year"])
    return years
};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    let winners = cb.map(game => {if(game["Home Team Goals"]>game["Away Team Goals"]){
        return game["Home Team Name"]
    }else {
        return game["Away Team Name"]
    }})
    return winners
};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(functWin, functYear) {
    let winners = functWin(getFinals(fifaData));
    let years = functYear(getFinals(fifaData));
    let strings = [];
    for(let i = 0; i < winners.length; i++){
        strings.push(`In the year ${years[i]}, ${winners[i]} won the FIFA World Cup Final.`)
    }
    return strings
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeGoals = data.reduce((accumulator, currentVal) => {
        return accumulator + currentVal["Home Team Goals"];}, 0);
    let awayGoals = data.reduce((accumulator, currentVal) => {
        return accumulator + currentVal["Away Team Goals"];}, 0);
    return { "Home Average": (homeGoals/data.length).toFixed(2),
    "Away Average": (awayGoals/data.length).toFixed(2)}
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
