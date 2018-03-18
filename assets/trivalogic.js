
var questions = [{
    question: "Which Superbowl did the Philadelphia Eagles win?",
    option1: "Superbowl 47",
    option2: "Superbowl 52",
    option3: "Superbowl 51",
    option4: "Superbowl 15",
    answer: "2"

}, {
    question: "What was the first Superbowl appearance for the Eagles?",
    option1: "Superbowl 47",
    option2: "Superbowl 52",
    option3: "Superbowl 51",
    option4: "Superbowl 15",
    answer: "4"
}, {
    question: "What year was the team founded?",
    option1: "1933",
    option2: "1960",
    option3: "1954",
    option4: "1925",
    answer: "1"
}, {
    question: "Where did Carson Wentz play football in College?",
    option1: "South Dakota State University",
    option2: "South Dakota University",
    option3: "North Dakota University",
    option4: "North Dakota State University",
    answer: "4"
}, {
    question: "Who was the Eagles 2017 First Round Pick in the draft?",
    option1: "Carson Wentz",
    option2: "Sidney Jones",
    option3: "Derek Barnett",
    option4: "Nick Foles",
    answer: "3"
}];



var count= 0;
var totQuestions = questions.length;
var currentQuestion = 0;

var container = document.getElementById('questionBox');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


window.onload = function () {
    $("#display-holder").on("click", stopwatch.start);
    $("#questionBox")

};
var clockRunning = false;
var intervalId;
var stopwatch = {

    time: 120,

    start: function() {
        stopwatch.time = 120;
        $("#start").text("GO!");
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }

},
    count:function() {
        stopwatch.time--;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $("#display-holder").text(converted);
        if (stopwatch.time === 0) {
            clearInterval(intervalId);
            clockRunning = false;
            alert ("You are out of time!")
        }
    },

timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}
};



function loadQuestion (questionIndex) {
    var i = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + i.question;

    opt1.textContent = i.option1;
    opt2.textContent = i.option2;
    opt3.textContent = i.option3;
    opt4.textContent = i.option4;

}

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select an answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        count+=20;
    }

    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your score is ' +count + '!';
        clearInterval(intervalId);
        clockRunning = false;
        return;
    }
    loadQuestion(currentQuestion);
};

// loadQuestion(currentQuestion);

// $("#start").on("click", loadQuestion(currentQuestion));

$(document).on("click", "#start", function() {
    $("#questionBox").show();
    loadQuestion(currentQuestion);
});

