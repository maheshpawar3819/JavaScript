let totalQuestions = 0;
let correctAnswers = 0;
let num1, num2, operation, answer;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  operation = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];

  switch (operation) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2; // You might want to handle division by zero
      break;
    default:
      answer = num1 + num2; // Default to addition
  }

  // Generate the question text
  const questionText = `${num1} ${operation} ${num2}?`;
  document.getElementById("question").innerText = questionText;
}

function nextQuestion() {
  document.getElementById("answer").value = "";
  generateQuestion();
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === answer) {
    correctAnswers++;
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Incorrect!";
  }
  totalQuestions++;
  displayResult();
}

function displayResult() {
  if (totalQuestions > 0) {
    const score = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    document.getElementById(
      "result"
    ).innerText += ` Score: ${score}% (${correctAnswers}/${totalQuestions})`;
  }
}

// Initial setup
generateQuestion();

// function generatequestions() {
//   const num1 = Math.floor(Math.random() * 10) + 1;
//   const num2 = Math.floor(Math.random() * 10) + 1;
//   const operation = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
//   let answer;
//   let questionstext;
// }

// function nextquestion() {
//   document.getElementById("answer").value = "";
//   generatequestions();
//   displayresult();
// }

// function displayresult() {
//   if (totalquestions > 0) {
//     const score = ((correctans / totalquestions) * 100).toFixed(2);
//     document.getElementById(
//       "result"
//     ).innerText = `score: ${score}% (${correctans}/${totalquestions})`;
//   }else{
//     document.getElementById('result').innerText='';
//   }
// }
// generatequestions();
// displayresult();
