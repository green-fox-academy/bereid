window.onload = () => {
  const genres = document.querySelector('#genres');
  const movies = document.querySelector('#movies');
  const selectedMovie = document.querySelector('form p');
  genres.addEventListener('change', (event) => {
    for (let i = 0; i < movies.length; i++) {
      if (event.target.value === movies[i].className) {
        movies[i].style.display = 'block';
      } else {
        movies[i].style.display = 'none';
      }
    }
  });
  movies.addEventListener('change', () => {
    selectedMovie.textContent = `Selected movie: ${movies.options[movies.selectedIndex].text}`;
  });
}
