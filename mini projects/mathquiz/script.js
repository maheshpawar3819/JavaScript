function generatequestions() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  let answer;
  let questionstext;
}

function nextquestion() {
  document.getElementById("answer").value = "";
  generatequestions();
  displayresult();
}

function displayresult() {
  if (totalquestions > 0) {
    const score = ((correctans / totalquestions) * 100).toFixed(2);
    document.getElementById(
      "result"
    ).innerText = `score: ${score}% (${correctans}/${totalquestions})`;
  }else{
    document.getElementById('result').innerText='';
  }
}
generatequestions();
displayresult();
