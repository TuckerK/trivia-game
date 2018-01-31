$(document).ready(function() {
  //   console.log("ready!");

  var correctCounter = 0;
  var wrongCounter = 0;
  var unansweredCounter = 0;

  var questionsArr = [
    {
      question: "What is Ash's last name?",
      answer: "Ketchum",
      wrong: ["Oak", "Mustard", "Potter"]
    },
    {
      question: "Who is Ash's Pokemon companion?",
      answer: "Pikachu",
      wrong: ["Squirtle", "Ron", "Meowth"]
    },
    {
      question: "In what region did the first Pokemon game take place??",
      answer: "Kanto",
      wrong: ["Hogwarts", "Kalos", "Unova"]
    },
    {
      question: "How many original Pokemon were there?",
      answer: "151",
      wrong: ["101", "20", "85"]
    },
    {
      question: "How many evolutions were there for Eevee, originally?",
      answer: "3",
      wrong: ["2", "15", "9"]
    }
  ];

  $(".startBtn").on("click", function() {
    //   console.log('start button click!');
    startGame();
  });

  function startGame() {
    console.log("start game function");
    $(".startBtn").remove();

    for (let i = 0; i < questionsArr.length; i++) {
      const questionObj = questionsArr[i];

      for (let k = 0; k < questionObj.wrong.length; k++) {
        const wrongArr = questionObj.wrong[k];

        var questionDiv = $("<div>").addClass("form-group");

        var questionText = $("<h2>").text(questionObj.question);

        var questionAnswers = $(
          "<input type='radio'>" + " " + questionObj.answer + " " + "</input>"
        )
          .addClass("right");

        var questionWrong = $(
          "<input type='radio'>" + " " + questionObj.wrong[k] + " " + "</input>"
        )
          .addClass("wrong");

        questionDiv.append(questionText, questionAnswers, questionWrong);
      }
      $(".questionContainer").append(questionDiv);
    }
  }
});
