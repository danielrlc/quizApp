// *** Can we go through all my comments and check that they show I understand what I'm doing?

// Declare global variables.
var i = 1;
var score = 0;

// Hide questions 2-5 in JavaScript, not in CSS, in case JavaScript is turned off.
$(".q2, .q3, .q4, .q5").hide();

// $(".qNum").append("Question 1 of 5");
// $(".score").append("Your score is " + score + "%");

// Only one question showing at a time. Player clicks "next" button to navigate through questions.
var qNum = 1;
$(".next").on("click", function() {
  // *** set i globally, but is this a bad solution normally?
  i = 1;
  $(".feedback").empty();
  $(".qNum").empty();
  if (qNum !== 5) {
    qNum++;
  }
  $(".qNum").append("Question " + qNum + " of 5");
  $(".q" + qNum).show();
  $(".q" + (qNum - 1)).hide();
});

if (qNum === 1) {
  $(".previous").addClass(".previousGray");
}
else if (qNum === 5) {
  $(".next").addClass(".nextGray");
}
else {

}

$(".previous").on("click", function() {
  // *** set i globally, but is this a bad solution normally?
  i = 1;
  $(".feedback").empty();
  $(".qNum").empty();
  if (qNum !== 1) {
    qNum--;
  }
  $(".qNum").append("Question " + qNum + " of 5");
  $(".q" + qNum).show();
  $(".q" + (qNum + 1)).hide();
});

// Create prototype object called Question. All question objects will be constructed from this blueprint. 
function Question(qText, qAudio, a1, a2, a3, a4, aInfo) {
    this.qText = qText;
    this.qAudio = qAudio;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.aInfo = aInfo;
}

// Create question 1 object from Question blueprint.
var q1 = new Question (
  "<p>You're about to hear the start of a popular symphony. But who wrote it?</p>",
  "<p><audio src='q1.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>",
  "<p>Shostakovich wrote this symphony in 1939-1940 during the siege of his hometown Leningrad.</p>"
  );

// Create question 2 object from Question blueprint.
var q2 = new Question (
  "<p>You're about to hear the start of a popular symphony. But who wrote it?</p>",
  "<p><audio src='q1.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>",
  "<p>Shostakovich wrote this symphony in 1939-1940 during the siege of his hometown Leningrad.</p>"
  );

// Create question 3 object from Question blueprint.
var q3 = new Question (
  "<p>You're about to hear the start of a popular symphony. But who wrote it?</p>",
  "<p><audio src='q1.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>",
  "<p>Shostakovich wrote this symphony in 1939-1940 during the siege of his hometown Leningrad.</p>"
  );

// Create question 4 object from Question blueprint.
var q4 = new Question (
  "<p>You're about to hear the start of a popular symphony. But who wrote it?</p>",
  "<p><audio src='q1.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>",
  "<p>Shostakovich wrote this symphony in 1939-1940 during the siege of his hometown Leningrad.</p>"
  );

// Create question 5 object from Question blueprint.
var q5 = new Question (
  "<p>You're about to hear the start of a popular symphony. But who wrote it?</p>",
  "<p><audio src='q1.mp3' preload='auto' controls></audio></p>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>",
  "<p>Shostakovich wrote this symphony in 1939-1940 during the siege of his hometown Leningrad.</p>"
  );

// Paste question object properties into CSS containers.
$(".q1").append(q1.qText, q1.qAudio, q1.a1, q1.a2, q1.a3, q1.a4);
$(".q2").append(q2.qText, q2.qAudio, q2.a1, q2.a2, q2.a3, q2.a4);
$(".q3").append(q3.qText, q3.qAudio, q3.a1, q3.a2, q3.a3, q3.a4);
$(".q4").append(q4.qText, q4.qAudio, q4.a1, q4.a2, q4.a3, q4.a4);
$(".q5").append(q5.qText, q5.qAudio, q5.a1, q5.a2, q5.a3, q5.a4);

// Feedback if player chooses right answer.
$(".right").one("click", function() {
  $(".feedback").empty();
  $(".feedback").append("Good job!");
  $(this).addClass("rightShow");
  $(this).append("<audio src='taDaRight.mp3' preload='auto' autoplay ></audio>");
  $(".feedback").append(q1.aInfo);
  if (i === 1) {
    score += 20;
  }
  $(".score").empty();
  $(".score").append("Your score is " + score + "%");
  
  // *** This is a bit of a fudge. It's to make sure player can't pick a wrong answer after selecting the right answer. Any better way to do this?
  i += 4;
});

// Feedback if player chooses wrong answer. Different feedback is given for first, second and third wrong answer.
$(".wrong").one("click", function() {
  if (i < 4) {
  $(this).addClass("wrongShow");
  $(this).append("<audio src='gongWrong.mp3' preload='auto' autoplay ></audio>");
  }
  else {
  }
  if (i === 1) {
    $(".feedback").append("You have gong wrong.");
  }
  else if (i === 2) {
    $(".feedback").empty();
    $(".feedback").append("Still wrong, thus the gong.");
  }
  else if (i === 3) {
    $(".feedback").empty();
    $(".feedback").append("Maybe you just like the sound of gongs?");
  }
  i++;
});


