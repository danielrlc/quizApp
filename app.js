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
    return ("hello");
};

var q1 = new Question ("q1", "a1", "a2", "a3", "a4");
var q2 = new Question ("q2", "a1", "a2", "a3", "a4");
var q3 = new Question ("q3", "a1", "a2", "a3", "a4");
var q4 = new Question ("q4", "a1", "a2", "a3", "a4");
var q5 = new Question ("q5", "a1", "a2", "a3", "a4");

$(".question1").append(q1.q, q1.a1, q1.a2, q1.a3, q1.a4);
$(".question2").append(q2.q, q2.a1, q2.a2, q2.a3, q2.a4);
$(".question3").append(q3.q, q3.a1, q3.a2, q3.a3, q3.a4);
$(".question4").append(q4.q, q4.a1, q4.a2, q4.a3, q4.a4);
$(".question5").append(q5.q, q5.a1, q5.a2, q5.a3, q5.a4);

