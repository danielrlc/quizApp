// Hide questions 2-5 in JavaScript, not in CSS, in case JavaScript is turned off.
$(".Q2, .Q3, .Q4, .Q5").hide();

// Show one question at a time and hide the rest.
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

function Question(q, a1, a2, a3, a4) {
    this.q = q;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
}

var q1 = new Question (
  "<audio src='q1.mp3' preload='auto' controls></audio>",
  "<li class='wrong'>Mozart</li>",
  "<li class='right'>Shostakovich</li>",
  "<li class='wrong'>Elgar</li>",
  "<li class='wrong'>Bach</li>");
var q2 = new Question ("a1", "a2", "a3", "a4");
var q3 = new Question ("a1", "a2", "a3", "a4");
var q4 = new Question ("a1", "a2", "a3", "a4");
var q5 = new Question ("a1", "a2", "a3", "a4");

$(".question1").append(q1.q, q1.a1, q1.a2, q1.a3, q1.a4);
$(".question2").append(q2.a1, q2.a2, q2.a3, q2.a4);
$(".question3").append(q3.a1, q3.a2, q3.a3, q3.a4);
$(".question4").append(q4.a1, q4.a2, q4.a3, q4.a4);
$(".question5").append(q5.a1, q5.a2, q5.a3, q5.a4);

$(".right").one("click", function() {
$(this).addClass("rightShow");
$(this).append(" √ Good job!");
$(this).append("<audio src='right.mp3' preload='auto' autoplay ></audio>");
});

$(".wrong").one("click", function() {
$(this).addClass("wrongShow");
$(this).append(" X Try again!");
$(this).append("<audio src='wrong.mp3' preload='auto' autoplay ></audio>");
});


