const p_question = document.getElementById("p_question");
const div_propositions = document.getElementById("div_propositions");
let numberGoodAnswers = 0;
const questions = [
  {
    text: "Quel langage de programmation est principalement utilisé pour le développement web côté client?",
    propositions: [
      {
        text: "Python",
        isAnswer: false,
      },
      {
        text: "JavaScript",
        isAnswer: true,
      },
      {
        text: "C++",
        isAnswer: false,
      },
    ],
  },
  {
    text: "Quelle structure de données suit le principe 'dernier entré, premier sorti' (LIFO) ?",
    propositions: [
      {
        text: "File",
        isAnswer: false,
      },
      {
        text: "Pile",
        isAnswer: true,
      },
      {
        text: "Tableau",
        isAnswer: false,
      },
    ],
  },
  {
    text: "Quel mot-clé est utilisé en Python pour définir une fonction ?",
    propositions: [
      {
        text: "define",
        isAnswer: false,
      },
      {
        text: "function",
        isAnswer: false,
      },
      {
        text: "def",
        isAnswer: true,
      },
    ],
  },
  {
    text: "Quel type de boucle en Python vous permet de parcourir les éléments d'une liste ?",
    propositions: [
      {
        text: "while",
        isAnswer: false,
      },
      {
        text: "for",
        isAnswer: true,
      },
      {
        text: "repeat",
        isAnswer: false,
      },
    ],
  },
];

function drawQuestions() {
  p_question.innerText = "";
  div_propositions.innerText = "";
  for (let i = 0; i < questions.length; i++) {
    if (i == numberGoodAnswers) {
      p_question.innerText += questions[i].text;

      for (let j = 0; j < questions[i].propositions.length; j++) {
        let p = document.createElement("p");
        p.classList.add("propo");
        p.innerText += questions[i].propositions[j].text;
        div_propositions.appendChild(p);
      }
    }
  }
}

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("propo")) {
    const currentQuestion = questions[numberGoodAnswers];
    currentQuestion.propositions.forEach((prop) => {
      if (event.target.innerText === prop.text && prop.isAnswer) {
        numberGoodAnswers += 1;
        drawQuestions();
      }
    });
  }
});

drawQuestions();
