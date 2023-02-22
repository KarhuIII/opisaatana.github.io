let score = {
  correct: 0,
  incorrect: 0,
};

let correctAnswer;

function generateProblem() {
  // Generate two random numbers between 1 and 100
  let num1 = Math.floor(Math.random() * 100) + 1;
  let num2 = Math.floor(Math.random() * num1) + 1; // Ensure num2 is less than or equal to num1

  // Generate a random operator (+, -, or *)
  let operator = ["+", "-"][Math.floor(Math.random() * 2)];

  // Build the math problem as a string
  let problem = num1 + " " + operator + " " + num2;

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
