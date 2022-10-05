// let userName = "Harold";
// let userName002 = "Diandre";

// for ( let i = 0; i <= 10; i++ ){

//     console.log( userName + " and " + userName002 + " make great ZOOM talkers." );

// } // ends forLoop

  // IDEAS TO WORK ON TO EXPAND THIS GAME EVEN FURTHER
  // Check which team won the game && check which player in EACH team got the most points at the end of the games.


  // possibleScores
  let scoreArray = [ 0, 2, 3 ];

  // arrays that will be populated with the score
  let playerScore001 = [];
  let playerScore002 = [];

  // declaring variables and initializing their value to zero
  let score001 = 0;
  let score002 = 0;
  let closerTo100 = 0;
  let gameNum = 0;


while ( score001 <= 97  ||  score002 <= 97   ) {
  
  console.log("Game: " + gameNum );
  
  // the line of code below was used to generate a random number from 0 to 1
  // this random number was used to pick a random index inside an array with two values
  // playerScore001.push( scoreArray[ Math.round( Math.random() ) ] );

  //  the following line of code will pick a random item inside and array an get its value and push it to the playerScore001 array.
  playerScore001.push( scoreArray[ Math.floor( Math.random() * scoreArray.length ) ] );

  // adds the sum of the whole array 
  score001 = playerScore001.reduce( (a, b) => a + b, 0 );
  console.log("Player 1 - Score: " + score001 );
  
  // playerScore002.push( scoreArray[ Math.round( Math.random() ) ] );
  playerScore002.push( scoreArray[ Math.floor( Math.random() * scoreArray.length ) ] );

  // adds the sum of the whole array
  score002 = playerScore002.reduce((a, b) => a + b, 0);
  console.log("Player 2 - Score: " + score002 + "\n");

  // When getting close to the 100 point. The following line will break out of the whileLoop
  if ( score001 >= 97 || score002 >= 97 )
    break;
  // hjey i made a change

  gameNum++;
  
} // ends whileLoop


console.log("WINNER: " + isItNear100( score001 , score002 )  + " in GAME: " + gameNum);


function isItNear100 ( num1, num2 ) {
  
   let num001 = 0;
   let num002 = 0;

  // This if statement takes care if the scores are not the same
  if ( num1 != num2 ){
    
    num001 = Math.abs(num1 - 100);
    num002 = Math.abs(num2 - 100);
  
    if ( num001 < num002 ){
      return "Player 1 with a score of " + num1;
    }
    if (num002 < num001){
      return "Player 2 with a score of " + num2;
    }
    return 0;
  } // the following line will print if they scored the same.
  else
    return "Tied";
  
  
} // ends isItNear100