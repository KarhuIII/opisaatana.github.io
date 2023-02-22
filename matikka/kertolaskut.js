let score = {
  correct: 0,
  incorrect: 0,
};

let correctAnswer;

function generateProblem() {
  let num1, num2, operator, problem;

  // Generate two random numbers between 1 and 10 that are in the multiplication table
  do {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
  } while (num1 * num2 > 100 || num1 * num2 !== Math.floor(num1 * num2));

  // Set operator to *
  operator = "*";

  // Build the math problem as a string
  problem = num1 + " " + operator + " " + num2;

  // Evaluate the math
  correctAnswer = eval(problem);

  // Display the problem
  document.getElementById("problem").innerHTML = problem;

  // Clear the answer field
  document.getElementById("answer").value = "";

  // Return the correct answer
  return correctAnswer;
}

function checkAnswer() {
  // Get the user's answer
  let userAnswer = document.getElementById("answer").value;

  // Check if the user's answer is correct
  if (userAnswer == correctAnswer) {
    score.correct++;
    document.getElementById("score-correct").innerHTML = score.correct;
  } else {
    score.incorrect++;
    document.getElementById("score-incorrect").innerHTML = score.incorrect;
  }

  // Generate a new problem
  generateProblem();
}

// Generate the first problem
generateProblem();
