window.onload = () => {
  let wrapper = document.querySelector('.wrapper');
  let newP = document.createElement('p');
  let URL = 'http://localhost:8080'
  


  fetch(`${URL}/game`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  })
    .then(resp => resp.json())
    .then(response => {
      newP.innerText = response[0].question;
      wrapper.appendChild(newP)
    });
  ;
}
