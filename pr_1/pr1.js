// Initialize the array of movie objects
const movieCollection = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
  { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
  { title: "Parasite", genre: "Thriller", rating: 8.6, releaseYear: 2019 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 },
  { title: "The Godfather", genre: "Crime", rating: 9.2, releaseYear: 1972 },
];

// Function to add a new movie to the collection
function addMovie(title, genre, rating, releaseYear) {
  movieCollection.push({ title, genre, rating, releaseYear });
  console.log(`Movie "${title}" added to the collection.`);
}

// Function to list all movies of a specific genre
function listMoviesByGenre(genre) {
  const filteredMovies = movieCollection.filter(movie => movie.genre === genre);
  console.log(`Movies in genre "${genre}":`);
  filteredMovies.forEach(movie =>
    console.log(`- ${movie.title} (${movie.releaseYear}, Rating: ${movie.rating})`)
  );
}

// Function to find the highest-rated movie in the collection
function findHighestRatedMovie() {
  const highestRatedMovie = movieCollection.reduce((best, movie) =>
    movie.rating > best.rating ? movie : best
  );
  console.log(`Highest-rated movie: ${highestRatedMovie.title} (Rating: ${highestRatedMovie.rating})`);
}

// Use map() to create a list of all movie titles
function listAllMovieTitles() {
  const movieTitles = movieCollection.map(movie => movie.title);
  console.log("List of movie titles:", movieTitles.join(", "));
}

// Use filter() to find movies released after a specific year
function listMoviesAfterYear(year) {
  const recentMovies = movieCollection.filter(movie => movie.releaseYear > year);
  console.log(`Movies released after ${year}:`);
  recentMovies.forEach(movie =>
    console.log(`- ${movie.title} (${movie.releaseYear})`)
  );
}

// Sample calls
addMovie("Avengers: Endgame", "Action", 8.4, 2019);
listMoviesByGenre("Sci-Fi");
findHighestRatedMovie();
listAllMovieTitles();
listMoviesAfterYear(2010);
