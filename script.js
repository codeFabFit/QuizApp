// // getting buttons to work 

// // start the game 

// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')

// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')
// // shuffle the questions 

// let shuffledQuestions, currentQuestionIndex  

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

// function startGame () {
//     console.log("started")
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }


// function setNextQuestion () {
//     resetState()
//     showQuesiton(shuffledQuestions[currentQuestionIndex])
// }



// // set the questions / show the question 



// function showQuesiton(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     });
        
// }

// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while(answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// // select answer 

// function selectAnswer (e) {
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     }) 
//     if(shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
// } else {
//     startButton.innerText = "Restart"
//     startButton.classList.remove('hide')
// }}


// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct){
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')

// }
 
// const questions = [
//     {
//         question: 'what is 2 + 2?',
//         answer: [
//             { text: '4', correct: true },
//             { text: '22', correct: false }
//         ],
//         question: 'what is 2 x 2?',
//         answer: [
//             { text: '4', correct: true },
//             { text: '22', correct: false }
//         ],
//         question: 'how many letters is in two?',
//         answer: [
//             { text: '4', correct: true },
//             { text: '22', correct: false },
//             { text: '300', correct: false },

//         ],
//         question: 'what is 2 + 2?',
//         answer: [
//             { text: '4', correct: true },
//             { text: '22', correct: false }
//         ],
//     }
// ]

/// just checking the difference between the codes 

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]