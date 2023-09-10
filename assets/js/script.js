var startBtn = document.querySelector("#startbtn")
var startCard = document.querySelector("#startcard")

var summaryCard = document.querySelector("#summary_card")
var score = 0

var timeEl = document.querySelector(".time")
var secondsLeft = 10
var gameOver = false

function setTime() {
    var timeInterval = setInterval (function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining to complete quiz."
        if(secondsLeft <= 0) {
            clearInterval(timeInterval);
            timeEl.textContent = "Sorry! You ran out of time, better luck next time!"
            summaryCard.setAttribute("style", "display:block");
            document.getElementById('scoreValue').textContent = score
        } else if(gameOver) {
            clearInterval(timeInterval);
            timeEl.textContent = "Great job!"
        }
    }, 1000)
}

var question1 = document.querySelector("#question_1")
var question2 = document.querySelector("#question_2")
var question3 = document.querySelector("#question_3")
var question4 = document.querySelector("#question_4")
var question5 = document.querySelector("#question_5")
var question6 = document.querySelector("#question_6")
var question7 = document.querySelector("#question_7")
var question8 = document.querySelector("#question_8")
var question9 = document.querySelector("#question_9")
var question10 = document.querySelector("#question_10")

var resultEl = document.getElementById('result')

startBtn.addEventListener("click", function() {
    startCard.setAttribute("class", "hidden")
    setTime()
    question1.setAttribute("style", "display:block")
});

const question1OptionBtns = document.querySelectorAll('#question_1 button');

question1OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question1.setAttribute("style", "display:none");
        question2.setAttribute("style", "display:block");
    });
});

const question2OptionBtns = document.querySelectorAll('#question_2 button');

question2OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question2.setAttribute("style", "display:none");
        question3.setAttribute("style", "display:block");
    });
});

const question3OptionBtns = document.querySelectorAll('#question_3 button');

question3OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 0) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question3.setAttribute("style", "display:none");
        question4.setAttribute("style", "display:block");
    });
});

const question4OptionBtns = document.querySelectorAll('#question_4 button');

question4OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 2) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question4.setAttribute("style", "display:none");
        question5.setAttribute("style", "display:block");
    });
});

const question5OptionBtns = document.querySelectorAll('#question_5 button');

question5OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question5.setAttribute("style", "display:none");
        question6.setAttribute("style", "display:block");
    });
});

const question6OptionBtns = document.querySelectorAll('#question_6 button');

question6OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 0) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question6.setAttribute("style", "display:none");
        question7.setAttribute("style", "display:block");
    });
});

const question7OptionBtns = document.querySelectorAll('#question_7 button');

question7OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question7.setAttribute("style", "display:none");
        question8.setAttribute("style", "display:block");
    });
});

const question8OptionBtns = document.querySelectorAll('#question_8 button');

question8OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 0) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question8.setAttribute("style", "display:none");
        question9.setAttribute("style", "display:block");
    });
});

const question9OptionBtns = document.querySelectorAll('#question_9 button');

question9OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 2) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
            secondsLeft -= 5
        }
        question9.setAttribute("style", "display:none");
        question10.setAttribute("style", "display:block");
    });
});

const question10OptionBtns = document.querySelectorAll('#question_10 button');

question10OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
            score += 10
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
        }
        question10.setAttribute("style", "display:none");
        gameOver = true
        resultEl.style.display = 'none'
        summaryCard.setAttribute("style", "display:block");
        document.getElementById('scoreValue').textContent = score
    });
});
