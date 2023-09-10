var startBtn = document.querySelector("#startbtn")
var startCard = document.querySelector("#startcard")

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
    question1.setAttribute("style", "display:block")
});

const question1OptionBtns = document.querySelectorAll('#question_1 button');

question1OptionBtns.forEach(function(button, index) {
    button.addEventListener('click', function() {
        resultEl.style.display = 'block'

        if (index === 1) {
            resultEl.children[0].style.display = 'block'
            resultEl.children[1].style.display = 'none'
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
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
        } else {
            resultEl.children[1].style.display = 'block'
            resultEl.children[0].style.display = 'none'
        }
        question10.setAttribute("style", "display:none");
        // change to result div & form
        question3.setAttribute("style", "display:block");
    });
});
