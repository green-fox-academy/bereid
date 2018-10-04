window.onload = () => {
  let wrapper = document.querySelector('.wrapper');
  let URL = 'http://localhost:8080'
  let scoreSheet = document.createElement('h2');
  let yourScore = 0;
  scoreSheet.innerHTML = `Your score: ${yourScore}`;
  wrapper.appendChild(scoreSheet);
  let form = document.createElement('form');
  wrapper.appendChild(form);
  let questionField = document.createElement('legend');
  form.appendChild(questionField).innerHTML =
    fetch(`${URL}/game`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
      .then(resp => resp.json())
      .then(response => {
        console.log(response);
        form.appendChild(questionField).innerHTML = response.question;
        response.answers.forEach(answer => {
          let newAnswer = document.createElement('button');
          newAnswer.type = 'submit';
          newAnswer.id = answer.id;
          newAnswer.name = 'answer';
          newAnswer.innerText = answer.answer;
          newAnswer.classList.add('submit');
          form.appendChild(newAnswer);
          newAnswer.addEventListener('click', (event) => {
            event.preventDefault();
            if (answer.is_correct === 1) {
              console.log('ez yo válasz tes');
            } else {
              console.log('ez meg nem annyira jo valasz tes');
            }
          });
        });

      });
  ;
}
