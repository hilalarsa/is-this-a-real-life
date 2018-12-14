
var readline = require('readline-sync');

var name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");
let length = 10
if(checkEven(length)){
  let pool=createArray(length);
  console.log(pool);
  let saveUserTotal,saveComputerTotal
  let firstNumber = getFirstNumber(pool)
  let lastNumber = getLastNumber(pool)
  let userNumber = getUserNumber(firstNumber,lastNumber)
  let computerNumber = getComputerNumber(firstNumber,lastNumber)
  if(userNumber==="error" || computerNumber==="error"){
    console.log("value is not correct or not between range")
  }
  console.log("user pick: "+userNumber)
  console.log("AI pick: "+computerNumber)

}else{
  console.log("Number not even, insert again")
}

function getComputerNumber(firstNumber,lastNumber){
  let computerNumber = Math.floor(Math.random()*10%2)
  if(computerNumber===0){
    return firstNumber
  }else if(computerNumber===1){
    return lastNumber
  }else{
    return "error"
  }
}

function getUserNumber(firstNumber,lastNumber){
  let userNumber = readline.question("User pick?")
  if(userNumber===firstNumber || userNumber===lastNumber ){
    return userNumber
  }else{
    return "error"
  }
}

function getFirstNumber(pool){
  return pool[0]
}

function getLastNumber(pool){
  let length=pool.length+1;
  return pool[length];
}


function checkEven (number) {
  return number%2===0?true:false;
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
if(checkEven(length)){
  console.log(createArray(length))
  console.log("even")
}else{
  console.log("Number not even, insert again")
}

  

function checkEven (number) {
  return number%2===0?true:false
}

function createArray(length){
let pool = []
let random;
  for(let i=0; i<length;i++){
    random = Math.floor((Math.random()*11)+10);
    pool[i] = random;
  }
  console.log(pool)
  return pool
}
