window.onload = () => {
  let wrapper = document.querySelector('.wrapper');
  let URL = 'http://localhost:8080'
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
      });
    });
  ;
}
