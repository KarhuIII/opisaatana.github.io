var currentQuestion = 0;
var score = 0;

function loadQuestion() {
  $('input[name="answer"]').prop("checked", false);
  var question = questions[currentQuestion].question;
  var options = questions[currentQuestion].options;
  document.getElementById("question").innerHTML = question;
  document.getElementById("option0text").innerHTML = options[0];
  document.getElementById("option1text").innerHTML = options[1];
  document.getElementById("option2text").innerHTML = options[2];
  document.getElementById("option3text").innerHTML = options[3];
}

function checkAnswer() {
  let answer = document.querySelector('input[name="answer"]:checked');
  if (answer === null) {
    alert("Anna vastaus");
    return;
  }

  let selectedOption = parseInt(answer.value);
  let correctOption = parseInt(questions[currentQuestion].correctOption);

  if (selectedOption === correctOption) {
    score++;
    document.getElementById("notification").innerHTML = "Oikein!";
    document.getElementById("notification").classList.add("is-success");
    document.getElementById("notification").classList.remove("is-danger");
  } else {
    document.getElementById("notification").innerHTML = "Väärin!";
    document.getElementById("notification").classList.add("is-danger");
    document.getElementById("notification").classList.remove("is-success");
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResult(score);
    currentQuestion = 0;
    score = 0;
    return;
  }

  loadQuestion();
}

function showResult(score) {
  const result = document.getElementById("result");
  result.innerHTML = `${score} / ${questions.length}`;

  // change text color to red if under 50% wrong
  const percentage = (score / questions.length) * 100;
  if (percentage < 50) {
    result.style.color = "red";
  }

  const modal = document.getElementById("result-modal");
  modal.classList.add("is-active");

  const scoreMessage = document.getElementById("score-message");
  if (score === 0) {
    scoreMessage.innerHTML =
      "Et saanut yhtään oikeaa vastausta. Yritä uudelleen!";
  } else if (score === questions.length) {
    scoreMessage.innerHTML = "Onneksi olkoon! Sait kaikki vastaukset oikein!";
  } else {
    scoreMessage.innerHTML = `Sait ${score} / ${questions.length} oikeaa vastausta. Jatka harjoittelua!`;
  }
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("notification").innerHTML = "";
  document.getElementById("notification").classList.remove("is-success");
  document.getElementById("notification").classList.remove("is-danger");
  loadQuestion();
}

function closeModal() {
  const modal = document.getElementById("result-modal");
  modal.classList.remove("is-active");
  resetQuiz();
}

loadQuestion();
