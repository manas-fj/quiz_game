let topics = [];
let questionBank = {};
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const quizEl = document.getElementById("quiz");
const topicEl = document.getElementById("question-topic");
const questionEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const loadingEl = document.getElementById("loading");

function parseCSV(csvString) {
  const lines = csvString.split("\n");
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(",");
    if (currentLine.length <= 1) continue; // Skip empty lines

    const topic = currentLine[0];

    // Add topic to topics array if not already present
    if (!topics.includes(topic)) {
      topics.push(topic);
      questionBank[topic] = [];
    }

    // Create question object
    const questionObj = {
      topic: topic,
      question: currentLine[1],
      options: [currentLine[2], currentLine[3], currentLine[4], currentLine[5]],
      answer: parseInt(currentLine[6]),
    };

    // Add question to the appropriate topic in questionBank
    questionBank[topic].push(questionObj);
  }
}

// Initialize questions directly from database.js
function initializeQuestions() {
  try {
    // csvData is loaded from database.js
    parseCSV(csvData);
    loadingEl.classList.add("hidden");
    startBtn.classList.remove("hidden");
  } catch (error) {
    console.error("Error loading questions:", error);
    loadingEl.textContent = "Error loading questions. Please refresh the page.";
  }
}

// Parse CSV data and organize into question bank
function parseCSV(csvText) {
  const lines = csvText.split("\n");
  // Skip header row
  const dataLines = lines.slice(1).filter((line) => line.trim() !== "");

  // Initialize topics and question bank
  topics = [];
  questionBank = {};

  dataLines.forEach((line) => {
    const [topic, question, option0, option1, option2, option3, answerIndex] =
      line.split(",");

    // Add topic to topics array if not already included
    if (!topics.includes(topic) && topic) {
      topics.push(topic);
      questionBank[topic] = [];
    }

    if (topic && question) {
      const questionObj = {
        topic,
        question,
        options: [option0, option1, option2, option3],
        answer: parseInt(answerIndex),
      };

      questionBank[topic].push(questionObj);
    }
  });
}

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  quizQuestions = getRandomQuestions(10);
  startBtn.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
}

function getRandomQuestions(num) {
  const allQuestions = [].concat(...Object.values(questionBank));
  return shuffle(allQuestions).slice(0, num);
}

function showQuestion() {
  clearOptions();
  const q = quizQuestions[currentQuestionIndex];
  topicEl.textContent = q.topic;
  questionEl.textContent = q.question;
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(idx));
    optionsEl.appendChild(btn);
  });
  updateScore();
}

function selectOption(selectedIndex) {
  const q = quizQuestions[currentQuestionIndex];
  if (selectedIndex === q.answer) score++;
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) showQuestion();
  else showResults();
}

function updateScore() {
  scoreEl.textContent = `Score: ${score} / ${currentQuestionIndex}`;
}

function showResults() {
  clearOptions();
  topicEl.textContent = "Quiz Completed!";
  const percent = Math.round((score / quizQuestions.length) * 100);
  questionEl.textContent = `You answered ${score} out of ${quizQuestions.length} correctly (${percent}%).`;
  scoreEl.textContent = "";
  const btn = document.createElement("button");
  btn.textContent = "Start Over";
  btn.addEventListener("click", () => {
    quizEl.classList.add("hidden");
    startBtn.classList.remove("hidden");
  });
  optionsEl.appendChild(btn);
}

function clearOptions() {
  optionsEl.innerHTML = "";
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Initialize by loading questions directly
document.addEventListener("DOMContentLoaded", initializeQuestions);
