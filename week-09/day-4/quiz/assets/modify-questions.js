window.onload = () => {
  const URL = 'http://localhost:8080';
  fetch(`${URL}/questions`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  })
  .then(resp => resp.json())
  .then(response => {
    console.log(response);
  });
}