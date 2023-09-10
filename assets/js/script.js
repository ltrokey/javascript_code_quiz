var startBtn = document.querySelector("#startbtn")
var startCard = document.querySelector("#startcard")
var question1 = document.querySelector("#question_1")




startBtn.addEventListener("click", function () {
    startCard.setAttribute("class", "hidden")
    question1.setAttribute("style", "display:block")
}
)
