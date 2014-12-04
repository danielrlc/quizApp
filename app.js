$(document).ready(function() {

// declare global variables
var wrongCounter = 1;
var score = 0;
var qNum = 0;

// hide questions at start
$(".q1, .q2, .q3, .q4, .q5, .q6, .game-info").hide();

// Pause audio when user clicks anywhere on page.
// Thanks for help here:
// http://stackoverflow.com/questions/965601
$(document).click(function(){
  $('audio').each(function() {
    if(!this.paused){
      this.pause();
    }
  });
});

// Only one question showing at a time.
// Player clicks "next" button to navigate through questions.
$(".next").on("click", function() {
  // set wrongCounter, so can give different feedback
  // for each wrong answer
  wrongCounter = 1;
  qNum++;
  $(".feedback").empty();
  $(".feedback").append("Listen and match the film to the music.");
  $(".qNum").empty();
  if (qNum !== 6) {
    $(".qNum").append(qNum + "/5");
    $(".q" + qNum).show();
    $(".q" + (qNum - 1)).hide();
    $(".game-info").show();
    $(".next").empty();
    $(".next").append("Next");
  }
  else {
    $(".q6").show();
    $(".q6").append(finalScore());
    $(".next, .game-info, .q5").hide();
  }
});

// Final score feedback
var finalScore = function() {
  $(".game-info, .next").hide();
    if (score === 100) {
      $(".q6").append("<p>You chose...very wisely. Your final score is " + score + "%</p>");
    }
    else if (score === 80) {
      $(".q6").append("<p>You chose...wisely. Your final score is " + score + "%</p>");
    }
    else if (score === 60) {
      $(".q6").append("<p>You chose...quite wisely. Your final score is " + score + "%</p>");
    }
    else if (score === 40) {
      $(".q6").append("<p>You chose...a little poorly. Your final score is " + score + "%</p>");
    }
    else if (score === 20) {
      $(".q6").append("<p>You chose...poorly. Your final score is " + score + "%</p>");
    }
    else {
      $(".q6").append("<p>You chose...very poorly. Your final score is " + score + "%</p>");
    }
  };

// ***************************************************************************************************************************

// Create prototype object called Question. All question objects will be constructed from this blueprint. 
var Question = function(qText, qAudio, a1, a2, a3, a4, aInfo) {
    this.qText = qText;
    this.qAudio = qAudio;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.aInfo = aInfo;
};

// Create question 1 object from Question blueprint.
var q1 = new Question (
  "<p></p>",
  "<p><audio src='raiders.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Star Wars</li>",
  "<li class='right'>Raiders of the Lost Ark</li>",
  "<li class='wrong'>Jurassic Park</li>",
  "<li class='wrong'>Superman</li>",
  "<p></p>"
  );

// Create question 2 object from Question blueprint.
var q2 = new Question (
  "<p></p>",
  "<p><audio src='seven-years.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Hook</li>",
  "<li class='wrong'>Saving Private Ryan</li>",
  "<li class='wrong'>Schindler's List</li>",
  "<li class='right'>Seven Years in Tibet</li>",
  "<p></p>"
  );

// Create question 3 object from Question blueprint.
var q3 = new Question (
  "<p></p>",
  "<p><audio src='jurassic-park.mp3' preload='auto' controls></audio></p>",
  "<li class='right'>Jurassic Park</li>",
  "<li class='wrong'>Hook</li>",
  "<li class='wrong'>The Temple of Doom</li>",
  "<li class='wrong'>Home Alone</li>",
  "<p></p>"
  );

// Create question 4 object from Question blueprint.
var q4 = new Question (
  "<p></p>",
  "<p><audio src='schindlers-list.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Hook</li>",
  "<li class='right'>Schindler's List</li>",
  "<li class='wrong'>Far and Away</li>",
  "<li class='wrong'>The Prisoner of Azkaban</li>",
  "<p></p>"
  );

// Create question 5 object from Question blueprint.
var q5 = new Question (
  "<p></p>",
  "<p><audio src='superman.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Saving Private Ryan</li>",
  "<li class='wrong'>Rosewood</li>",
  "<li class='right'>Superman</li>",
  "<li class='wrong'>The Temple of Doom</li>",
  "<p></p>"
  );

// Paste question object properties into CSS containers.
$(".q0").append("<p>Greetings, music lovers!</p><p>John Williams has written many of the greatest film scores of the past 40 years. This quiz is a small tribute to his musical talents. So can you match the music to the film?</p><p>Sit back, get your musical ears ready, and... turn the volume up!</p>");
$(".q1").append(q1.qAudio, q1.a1, q1.a2, q1.a3, q1.a4);
$(".q2").append(q2.qAudio, q2.a1, q2.a2, q2.a3, q2.a4);
$(".q3").append(q3.qAudio, q3.a1, q3.a2, q3.a3, q3.a4);
$(".q4").append(q4.qAudio, q4.a1, q4.a2, q4.a3, q4.a4);
$(".q5").append(q5.qAudio, q5.a1, q5.a2, q5.a3, q5.a4);

// ***************************************************************************************************************************

// Feedback if player chooses right answer.
$(".right").one("click", function() {
  $(".feedback").empty();
  $(".feedback").append("Correct!");
  $(".feedback").addClass("feedback-right");
  $(this).addClass("rightShow");
  $(this).append("<audio src='tada-right.mp3' preload='auto' autoplay volume=.2></audio>");
  if (wrongCounter === 1) {
    score += 20;
  }
  $(".score").empty();
  $(".score").append(score + "%");
  
  // This makes sure player can't pick a wrong answer after selecting the right answer.
  wrongCounter += 4;
});

// Feedback if player chooses wrong answer. Different feedback is given for first, second and third wrong answer.
$(".wrong").one("click", function() {
  $(".feedback").removeClass("feedback-right");
  $(".feedback").addClass("feedback-wrong");
  if (wrongCounter < 4) {
  $(this).addClass("wrongShow");
  $(this).append("<audio src='gongWrong.mp3' preload='auto' autoplay ></audio>");
  }
  else {
  }
  if (wrongCounter === 1) {
    $(".feedback").empty();
    $(".feedback").append("You have gong wrong – have another go.");
  }
  else if (wrongCounter === 2) {
    $(".feedback").empty();
    $(".feedback").append("Still wrong, thus the gong.");
  }
  else if (wrongCounter === 3) {
    $(".feedback").empty();
    $(".feedback").append("Maybe you just like the sound of gongs?");
  }
  wrongCounter++;
});

// ***************************************************************************************************************************

// Final score page
// if (qNum === 6) {
//   alert("hello!");
//   $(".game-info, .next").hide();
//   $(".q6").show();
//   if (score === 100) {
//     $(".q6").append("<p>You chose...very wisely. Your final score is " + score + "%</p>");
//   }
//   else if (score === 80) {
//     $(".q6").append("<p>You chose...wisely. Your final score is " + score + "%</p>");
//   }
//   else if (score === 60) {
//     $(".q6").append("<p>You chose...quite wisely. Your final score is " + score + "%</p>");
//   }
//   else if (score === 40) {
//     $(".q6").append("<p>You chose...a little poorly. Your final score is " + score + "%</p>");
//   }
//   else if (score === 20) {
//     $(".q6").append("<p>You chose...poorly. Your final score is " + score + "%</p>");
//   }
//   else {
//     $(".q6").append("<p>You chose...very poorly. Your final score is " + score + "%</p>");
//   }
// }

});


















