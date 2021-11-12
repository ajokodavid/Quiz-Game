const prompt = require("prompt-sync")({ sigint: true });

console.log("Welcome to my computer quiz!");

let playing = prompt("Do you want to play: ");

let score = 0;

if (playing.toLowerCase() != "yes") {
  process.exit(0);
}

console.log("Okay! let's play :)");

let answer = prompt("What does SSD stand for? ");
if (answer == "solid state drive" || answer == "SOLID STATE DRIVE" || answer == "Solid State Drive") {
  console.log("Correct!");
    score++;
} else {
    console.log("Wrong!");
}

let answer1 = prompt("What does GPU stand for? ");
if (answer1 == "Graphics processing unit" || answer1 == "GRAPHICS PROCESSING UNIT" || answer1 == "graphics processing unit") {
  console.log("Correct!");
  score++;
} else {
    console.log("Wrong!");
}

let answer2 = prompt("What does RAM stand for? ");
if (answer2 == "Random Access Memory" || answer2 == "RANDOM ACCESS MEMORY" || answer2 == "random access memory") {
  console.log("Correct!");
  score++;
} else {
    console.log("Wrong!");
}

let answer3 = prompt("Who is the father of computer? ");
if (answer3 == "Charles Babbage" || answer3 == "CHARLES BABBAGE" || answer3 == "charles babbage") {
  console.log("Correct!");
  score++;
} else {
    console.log("Wrong!");
}

console.log(`You got ${score.toString()} questions correct`);
console.log(`You got ${((score / 4) * 100).toString()} %.`);