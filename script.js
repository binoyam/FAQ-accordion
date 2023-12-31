var questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", showAnswer)
})
function showAnswer() {
  var answer = this.nextElementSibling;
  var icon = this.querySelector(".icon");
  var iconImg = icon.querySelector("img");
  if (answer.classList.contains('active')) {
    answer.classList.remove("active");
    answer.style.display = "none";
    iconImg.src = "./images/icon-plus.svg";
  } else {
    answer.classList.add("active");
    answer.style.display = "block";
    iconImg.src = "./images/icon-minus.svg";
  }
}
