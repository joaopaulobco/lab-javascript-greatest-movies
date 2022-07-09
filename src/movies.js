// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArr = moviesArray.map(movies => movies.director);
  return newArr;
  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  const steavenDrama = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama') )
  
  return steavenDrama.length;

  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(!moviesArray.length) return 0;
  const movieScores = moviesArray.map(movies => movies.score || moviesArray.score === null);
  const scoreReduce = movieScores.reduce((acc, num) => {return acc + num;}, 0);
  let scoreAvg = scoreReduce / movieScores.length;
  const any = Math.round(scoreAvg * 100) / 100;
  

  return any; 

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if(!moviesArray.length) return 0;
  const drama = moviesArray.filter(movies => movies.genre.includes ('Drama') );
  if(!drama.length) return 0;
  const dramaScore = drama.map(drama => drama.score );
  const reduceScore = dramaScore.reduce((acc, num)=>{ return acc + num}, 0 );
  let dramaAvg = reduceScore / dramaScore.length;
  const decimals = Math.round(dramaAvg * 100) / 100;
  
  return decimals;


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrayCopy = moviesArray.map((element) => element)
    .sort((a, b) => a.title ? a.title.localeCompare(b.title) : 0)
    .sort((a, b) => a.year - b.year);
  

  // .sort((a, b) => a.year - b.year).sort((a, b) => a.title.localeCompare(b.title));
  
  return arrayCopy;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const titleOrder = moviesArray.map((element) => element.title)
   
   
   return titleOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
