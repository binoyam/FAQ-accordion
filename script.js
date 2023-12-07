var questions = document.getElementsByClassName("question");

for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", showAnswer);
}
function showAnswer() {
  var answer = this.nextElementSibling;
  var icon = this.querySelector(".icon");
  var iconImg = icon.querySelector("img");
  if (answer.style.display === "block") {
    answer.style.display = "none";
    iconImg.src = "./images/icon-plus.svg";
  } else {
    answer.style.display = "block";
    iconImg.src = "./images/icon-minus.svg";
  }
}
