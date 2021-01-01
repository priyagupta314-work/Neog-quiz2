var score=0;
var highScorer={
  name: "Yet to come",
  scoreHigh: 0
}
var quiz = [{
  question: "Where does Priya work",
  options: ["IBM", "Microsoft", "Google"],
  answer: "IBM"
},
{
  question: "What does Priya drink?",
  options: ["Milk", "Team", "Coffee"],
  answer: "Milk"
},
{
  question: "Is Priya vegetarian?",
  options: ["Yes", "No"],
  answer: "Yes"
},
{
  question: "What does Priya like?",
  options: ["Beaches", "Mountains", "Plains"],
  answer: "Mountains"
},
{
  question: "Which is Priya's favorite sweet?",
  options: ["Gajar ka halwa", "Kaju Katli", "Rasgulla"],
  answer: "Kaju Katli"
}]
var readLineSync=require("readline-sync");
var userName=readLineSync.question("Enter your name:");

console.log("Welcome to DO YOU KNOW Priya, "+ userName);
if(readLineSync.keyInYN("Do you want to start playing?")){
  console.log("Ok! Let's start...");
  for(var i=0;i<quiz.length;i++){
  var currentQuestion=quiz[i];
  play(currentQuestion.question,currentQuestion.answer);
  
  
}
}
else{
  console.log("Ok Bye!");
}
if (score>highScorer.scoreHigh){
    console.log("You are the highest score achiever. Please send us a screenshot of this message and we will update our database");
    const chalk=require("chalk");

    console.log("Highest Scorer: " + userName );
    console.log(chalk.blue("score: ") + score);

  }
function play(question,answer){
  var readlineSync = require('readline-sync'),
  optionList=currentQuestion.options,index=readLineSync.keyInSelect(optionList,currentQuestion.question);
  
  if (optionList[index]===currentQuestion.answer){
    console.log('Right answer');
    score+=1;
  }
  else{
    console.log('Wrong answer');
    
  }
  console.log('Score-----> '+ score);
  }

