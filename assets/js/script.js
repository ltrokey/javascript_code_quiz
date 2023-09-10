var startBtn = document.querySelector("#startbtn")
var startCard = document.querySelector("#startcard")

var question1 = document.querySelector("#question_1")

const optionBtns = document.querySelectorAll('.card_display button')
const resultEl = document.getElementById('result')


startBtn.addEventListener("click", function() {
    startCard.setAttribute("class", "hidden")
    question1.setAttribute("style", "display:block")
}
)

optionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {

        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
        }
    })
})



