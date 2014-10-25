// Declare global variables.
var i = 1;

// Hide questions 2-5 in JavaScript, not in CSS, in case JavaScript is turned off.
$(".Q2, .Q3, .Q4, .Q5").hide();

// Only one question showing at a time.
// Player clicks "previous" or "next" button to navigate through questions.
var qNum = 1;
$(".next").on("click", function() {
  if (qNum !== 5) {
    qNum++;
  }
  $(".Q" + qNum).show();
  $(".Q" + (qNum - 1)).hide();
});
$(".previous").on("click", function() {
  if (qNum !== 1) {
    qNum--;
  }
  $(".Q" + qNum).show();
  $(".Q" + (qNum + 1)).hide();
});

// Create prototype object called Question.
// All question objects will be constructed from this blueprint. 
function Question(q, a1, a2, a3, a4) {
    this.q = q;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
}

// Create question 1 object from Question blueprint.
var q1 = new Question (
  "<audio src='q1.mp3' preload='auto' controls></audio>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>");

// Create question 2 object from Question blueprint.
var q2 = new Question ("a1", "a2", "a3", "a4");

// Create question 3 object from Question blueprint.
var q3 = new Question ("a1", "a2", "a3", "a4");

// Create question 4 object from Question blueprint.
var q4 = new Question ("a1", "a2", "a3", "a4");

// Create question 5 object from Question blueprint.
var q5 = new Question ("a1", "a2", "a3", "a4");

// Paste question object properties into CSS containers.
$(".question1").append(q1.q, q1.a1, q1.a2, q1.a3, q1.a4);
$(".question2").append(q2.a1, q2.a2, q2.a3, q2.a4);
$(".question3").append(q3.a1, q3.a2, q3.a3, q3.a4);
$(".question4").append(q4.a1, q4.a2, q4.a3, q4.a4);
$(".question5").append(q5.a1, q5.a2, q5.a3, q5.a4);

// Feedback if player chooses right answer.
$(".right").one("click", function() {
  $(this).addClass("rightShow");
  $(this).append(" √ Good job!");
  $(this).append("<audio src='taDaRight.mp3' preload='auto' autoplay ></audio>");
  
  // *** Image is coming out in two places
  $(".image").append("<img src='shostakovich.jpg'>");
  
  // *** This is a bit of a fudge.
  // It's to make sure player can't pick a wrong answer after selecting the right answer.
  // Any better way to do this?
  i += 4;
});

// Feedback if player chooses wrong answer.
// Different feedback is given for each wrong answer.
$(".wrong").one("click", function() {
  if (i < 4) {
  $(this).addClass("wrongShow");
  $(this).append("<audio src='gongWrong.mp3' preload='auto' autoplay ></audio>");
  }
  else {
  }
  if (i === 1) {
    $(this).append(" (You have gong wrong)");
  }
  else if (i === 2) {
    $(this).append(" (Still wrong, thus the gong)");
  }
  else if (i === 3) {
    $(this).append(" (Maybe you just like the sound of gongs?)");
  }
  i++;
});


