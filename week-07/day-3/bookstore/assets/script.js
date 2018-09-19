window.onload = () => {
  const host = 'http://localhost:8080'
  const request = new XMLHttpRequest;
  let bookTitles = document.querySelector('#booktitles');
  let bookTable = document.querySelector('#tablebody');
  request.open('GET', `${host}/books`, true);
  request.onload = () => {
    if (request.status === 200) {
      var data = JSON.parse(request.response);
      renderHTML2(data);
    }
  }

  function renderHTML2 (data) {
    data.forEach(book => {
      let newRow = document.createElement('tr');
      bookTable.appendChild(newRow);
      for(let i = 0; i < 5; i++){
        let newCell = document.createElement('td')
        newCell.innerText = Object.values(book)[i];
        newRow.appendChild(newCell);
      }  
    }
    );
  }



  request.send();
}



