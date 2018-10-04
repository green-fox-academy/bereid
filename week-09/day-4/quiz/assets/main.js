window.onload = () => {
  let wrapper = document.querySelector('.wrapper');
  let URL = 'http://localhost:8080'
  let scoreSheet = document.createElement('h2');
  let yourScore = 0;
  scoreSheet.innerHTML = `Your score: ${yourScore}`;
  wrapper.appendChild(scoreSheet);
  let questionContainer = document.createElement('div');
  wrapper.appendChild(questionContainer);
  questionContainer.classList.add('container');
  let questionField = document.createElement('legend');
  fetch(`${URL}/game`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  })
    .then(resp => resp.json())
    .then(response => {
      console.log(response);
      questionContainer.appendChild(questionField).innerHTML = response.question;
      response.answers.forEach(answer => {
        let newAnswer = document.createElement('button');
        newAnswer.id = answer.id;
        newAnswer.name = 'answer';
        newAnswer.innerText = answer.answer;
        newAnswer.classList.add('submit');
        questionContainer.appendChild(newAnswer);
        newAnswer.addEventListener('click', (event) => {
          if (answer.is_correct === 1) {
            newAnswer.style.background = 'blue';
            newAnswer.disabled = true;
            setTimeout(() => {
              location.reload();
            }, 3000);
            yourScore++;
          } else {
            newAnswer.style.background = 'red';
            newAnswer.disabled = true;
          }
        });
      });
    });
  let manageQuestions = document.createElement('a');
  wrapper.appendChild(manageQuestions);
  manageQuestions.href = `${URL}/modify-questions`
  manageQuestions.innerHTML = 'Manage questions';
  manageQuestions.classList.add('questionlink');
} 
