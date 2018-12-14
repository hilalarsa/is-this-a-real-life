
var readline = require('readline-sync');

let length = readline.question("Enter number: ");

if(checkEven(length)){
  let pool=createArray(length);
  console.log(pool);
  let saveUserTotal,saveComputerTotal
  let firstNumber = getFirstNumber(pool)
  let lastNumber = getLastNumber(pool)
  let userNumber = getUserNumber(firstNumber,lastNumber)
  let computerNumber = getComputerNumber(firstNumber,lastNumber)
  if(userNumber=="error" || computerNumber=="error"){
    console.log("value is not correct or not between range")
  }
  console.log("user pick: "+userNumber)
  console.log("AI pick: "+computerNumber)

}else{
  console.log("Number not even, insert again")
}

function getComputerNumber(firstNumber,lastNumber){
  let computerNumber = Math.floor(Math.random()*10%2)
  if(computerNumber==0){
    return firstNumber
  }else if(computerNumber==1){
    return lastNumber
  }else{
    return "error"
  }
}

function getUserNumber(firstNumber,lastNumber){
  let userNumber = readline.question("User pick?")
  console.log(userNumber,firstNumber,lastNumber)
  if(userNumber==firstNumber){
    return firstNumber
  }
  else if(userNumber==lastNumber){
    return lastNumber
  }
  else{
    return "error"
  }
}

function getFirstNumber(pool){
  console.log(pool[0])
  return pool[0]
}

function getLastNumber(pool){
  console.log(pool)
  return pool[pool.length-1];
}


function checkEven (number) {
  return number%2==0?true:false;
}

function createArray(length){
let array = []
let random;
  for(let i=0; i<length;i++){
    random = Math.floor((Math.random()*11)+10);
    array[i] = random;
  }
  return array
}

function checkEven (number) {
  return number%2==0?true:false
}

function createArray(length){
let pool = []
let random;
  for(let i=0; i<length;i++){
    random = Math.floor((Math.random()*11)+10);
    pool[i] = random;
  }
  return pool
}
