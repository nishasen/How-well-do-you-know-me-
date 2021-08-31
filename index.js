var readlineSync = require("readline-sync")

var userName = readlineSync.question("Hello! What is your name?")

console.log("Welcome "+userName+" to DO YOU KNOW Nisha?")

questionOne = {
  question: "Who is my favorite superhero?",
  answer: "Aquaman"
}

questionTwo = {
  question: "Which is my favorite song?",
  answer: "Yeh aina"
}

questionThree = {
  question: "Where do I live?",
  answer: "Gandhidham"
}

questionFour = {
  question: "Where do I work?",
  answer: "Capgemini"
}

questionFive = {
  question: "What is my surname?",
  answer: "Sen"
}

var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive]

var score = 0
function play(question, answer){
  var userAns = readlineSync.question(question)
  if(userAns === answer){
    score +=1;
    console.log("You are right")
  }
  else{
    console.log("You are wrong")
  }
  console.log("Current score: ", score)
  console.log("---------------------")
}

for(var i=0;i<quiz.length;i++){
  play(quiz[i].question, quiz[i].answer)
}
var HighScore=[{
  name : userName,
  score : score
}]

console.log("YAY your total score is ",score)

// const chalk = require('chalk');

// console.log(chalk.yellow.bgBlueBright('Hello world!'));
// console.log(chalk`
// 	There are {green.bold 5280 feet} in a mile.`)











