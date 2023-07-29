const quizDate = [
    {
        question: "Who invented Java Programming?",
        a:"Guido van Rossum",
        b:"James Gosling",
        c:"Dennis Ritchie",
        d:"Bjarne Stroustrup",
        correct:"b",
    },
    {
        question: "Which statement is true about Java?",
        a:"Java is a sequence-dependent programming language",
        b:"Java is a code dependent programming language",
        c:"Java is a platform-dependent programming language",
        d:"Java is a platform-independent programming language",
        correct:"d",
    },
    
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        a:"JRE",
        b:"JIT",
        c:"JDK",
        d:"JVM",
        correct:"c",
    },
     
    {
        question: "Which one of the following is not a Java feature?",
        a:"Object-oriented",
        b:"Use of pointers",
        c:"Portable",
        d:"Dynamic and Extensible",
        correct:"b",
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        a:"identifier & keyword",
        b:"identifier",
        c:"keyword",
        d:"none of the mentioned",
        correct:"c",
    },
    {
        question: "Which of the following option leads to the portability and security of Java?",
        a:"Bytecode is executed by JVM",
        b:"The applet makes the Java code secure and portable",
        c:"Use of exception handling",
        d:"Dynamic binding between objects",
        correct:"a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizDate[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer()
{
    answerEls.forEach(answerEl => answerEl.checked = false);
}
function getSelected()
{  
    let answer;
    answerEls.forEach(answerEls =>{
        if(answerEls.checked)
        answer = answerEls.id;
    })
    return answer;
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected()
    if(answer)
    {
        if(answer === quizDate[currentQuiz].correct)
        score++;

        currentQuiz++;

        if(currentQuiz < quizDate.length)
        {
            loadQuiz()
        }
        else{
            quiz.innerHTML = `
            <h2>You Answered ${score}/${quizDate.length} questions correct</h2>

            <button onclick="location.reload()">Rewrite</button>
            `
        }
    }
})