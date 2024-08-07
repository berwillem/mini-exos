const sentence = document.getElementById("sentence").innerText;
const inputField = document.getElementById("inputField");
const result = document.getElementById("result");
let startTime;

inputField.addEventListener("keydown", () => {
  if (!startTime) {
    startTime = new Date().getTime();
  }

  const userInput = inputField.value;

  if (userInput === sentence) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    console.log(timeTaken);
    const wordsPerMinute = (sentence.split(" ").length / timeTaken) * 60;

    result.innerHTML = `
      <p>Typing Speed: ${wordsPerMinute.toFixed(2)} words per minute</p>
    `;
  }
});

inputField.addEventListener("input", () => {
  const userInput = inputField.value;
  let correctChars = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === sentence[i]) {
      correctChars++;
    }
  }

  inputField.style.color = correctChars === userInput.length ? "green" : "red";
});

