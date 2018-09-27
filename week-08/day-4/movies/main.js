window.onload = () => {
  const genres = document.querySelector('#genres');
  const movies = document.querySelectorAll('#movies option');
  genres.addEventListener('change', (event) => {
    if (event.target.value === 'scifi') {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].className === 'sci-fi') {
          movies[i].style.display = 'block';
        } else {
          movies[i].style.display = 'none';
        }
      }
    } else if (event.target.value === 'drama') {
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].className === 'drama') {
          movies[i].style.display = 'block';
        } else {
          movies[i].style.display = 'none';
        }
      }
    } else if (event.target.value === 'comedy') {
      for (let i = 0; i < movies.lenght; i++) {
        if (movies[i].className === 'comedy') {
          movies[i].style.display = 'block';
        } else {
          movies[i].style.display = 'none';
        }
      }
    }
  });
}