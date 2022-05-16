// Answers of the test
const answers1 = ["_", "B", "C", "A", "A", "C", "B", "B", "B", "A", "A"];
const answers2 = [
  "A",
  "B",
  "A",
  "D",
  "B",
  "B",
  "A",
  "B",
  "D",
  "D",
  "A",
  "C",
  "C",
  "A",
  "D",
  "C",
  "D",
  "A",
  "A",
  "A",
];
const answers3 = ["D"];
const answers4 = [
  "B",
  "C",
  "B",
  "B",
  "D",
  "B",
  "A",
  "B",
  "C",
  "D",
  "C",
  "B",
  "B",
  "B",
  "C",
  "D",
  "B",
  "D",
  "B",
  "A",
  "D",
  "D",
  "B",
  "D",
  "C",
  "D",
];
const answers5 = ["C", "B", "C"];
const answers6 = ["B", "C"];
const answers7 = ["B", "B", "D", "B", "B", "B", "C"];
const answers8 = ["B", "D", "C", "A"];
const answers9 = ["C", "C", "C", "D", "B", "B", "B", "D", "A", "D", "B"];
const answers10 = ["A", "A", "A", "D", "D", "D"];
const answers11 = ["C", "B", "B", "C", "A", "C", "C", "D", "A"];
const answers12 = ["A", "B", "A", "B", "D", "A", "D"];
const answers13 = ["C", "B", "D", "C", "B"];
const answers14 = ["D", "A", "D"];

const answers = [
  ...answers1,
  ...answers2,
  ...answers3,
  ...answers4,
  ...answers5,
  ...answers6,
  ...answers7,
  ...answers8,
  ...answers9,
  ...answers10,
  ...answers11,
  ...answers12,
  ...answers13,
  ...answers14,
];

// The actual Badass script
const getQuestionNumber = () => {
  const currentQuestion = document.querySelector(
    "#divQuestion_TextRegion span"
  ).innerHTML;

  const questionNumber = currentQuestion.slice(
    currentQuestion.indexOf("Q") + 1,
    currentQuestion.length - 1
  );

  return questionNumber;
};

const answerQuestion = (answerId) => {
  const answers = document.querySelector("#divQuestion_ResponseRegion");
  answers.children[answerId].click();
  document.querySelector("#cmdSubmitResponse").click();
};

const nextQuestion = () => {
  const continueBtn = document.querySelector("input[value=continue]");
  continueBtn.click();
};

const nextSection = () => {
  const openBtn = document.querySelector("input[value=open]");
  openBtn.click();
};

if (window.location.pathname.includes("question.php")) {
  const answerIndex = getQuestionNumber();
  const answer = answers[answerIndex];

  // Convert the answer to the div index
  // Use 1 for A, 2 for B, 3 for C, 4 for D
  switch (answer) {
    case "A":
      answerQuestion(1);
      break;
    case "B":
      answerQuestion(2);
      break;
    case "C":
      answerQuestion(3);
      break;
    case "D":
      answerQuestion(4);
      break;
  }
}
window.location.pathname.includes("question_result.php") && nextQuestion();
window.location.pathname.includes("section_start.php") && nextSection();
