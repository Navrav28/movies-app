const SearchForm = document.querySelector("form");
const searchInput = document.querySelector(".searchInput");
const SearchButton = document.querySelector(".searchButton");
const MovieContainer = document.querySelector(".movie-container");

// const api = 'https://www.omdbapi.com/?apikey=';

// fetching movies from the API and displaying them
const getMoviesInfo = async (movies) => {
  try {
    // MovieContainer.innerHTML = '';
    const apikey = "5fdac6ee";
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apikey}&t=${movies}`,
    );
    const data = await response.json();
    console.log(data);
    //   if (!data.ok) {
    //     throw new Error("Movie not found");
    //   }
    showMoviesData(data);
    // alert(movies);
  } catch (error) {
    //   console.error("Error fetching data:", error);
    showErrorMessage("NO movie found with that name. Please try again.");
  }
};

// function to show movie data
const showMoviesData = (data) => {
  // Clear previous movie data
  MovieContainer.innerHTML = "";
  MovieContainer.classList.remove("onBackground");
  console.log(data);

  const {
    Title,
    imdbRating,
    Year,
    Runtime,
    Genre,
    Poster,
    Plot,
    Actors,
    Released,
  } = data;
  const movieElement = document.createElement("div");
  movieElement.classList.add("movieInfo");
  movieElement.innerHTML = `
    <h2>${Title}</h2>
    <p><strong>Rating:</strong> &#11088; ${imdbRating}</p>
  
    `;
  // ------------------------------------------------------------------------------------------------------------------------------
  //genere
  const movieGenereElement = document.createElement("div");
  movieGenereElement.classList.add("movie-genere");
  // Splitting the Genre string into an array and creating a paragraph for each genre
  Genre.split(",").forEach((genere) => {
    const p = document.createElement("p");
    p.innerText = genere;
    movieGenereElement.appendChild(p);
  });
  // -------------------------------------------------------------------------------------------------------------------------------
  movieElement.appendChild(movieGenereElement);
  movieElement.innerHTML += `
 
    <p><strong>Released Date :</strong> ${Released}</p>
    <p><strong>Duration:</strong> ${Runtime}</p>
    <p><strong>Actors:</strong> ${Actors}</p>
    <p><strong>Plot:</strong> ${Plot}</p>
    <p><strong>Year:</strong> ${Year}</p>

    `;
  // Adding the movie poster
  const moviePosterElement = document.createElement("div");
  moviePosterElement.classList.add("movie-poster");
  moviePosterElement.innerHTML = `<img src="${Poster}" alt="${Title} Poster">`;
  MovieContainer.appendChild(moviePosterElement);
  MovieContainer.appendChild(movieElement);
};
// function to show error message
const showErrorMessage = (message) => {
  MovieContainer.innerHTML = `<h2 class="error">${message}</h2>`;
  MovieContainer.classList.add("onBackground");
};
// function to handle the form submission and get the movie info
// const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const movies = searchInput.value.trim();
//     if (movies !== "") {
//         getMoviesInfo(movies);
//     } else {
//         showErrorMessage("Please enter a movie name.");
//     }
// }
//adding event listener to the search form
SearchForm.addEventListener("submit", (e) => {
  // alert(searchInput.value);
  e.preventDefault();
  const movies = searchInput.value.trim();
  if (movies !== "") {
    showErrorMessage("Fetching movie information...");
    getMoviesInfo(movies);
  } else {
    showErrorMessage("Please enter a movie name.");
  }
});

//   <img src="${Poster}" alt="${Title} Poster">
// {Title: 'Pathaan', Year: '2023', Rated: 'Not Rated', Released: '25 Jan 2023', Runtime: '146 min', …}
// Actors
// :
// "Shah Rukh Khan, Deepika Padukone, John Abraham"
// Awards
// :
// "11 wins & 55 nominations total"
// BoxOffice
// :
// "$17,487,476"
// Country
// :
// "India"
// DVD
// :
// "N/A"
// Director
// :
// "Siddharth Anand"
// Genre
// :
// "Action, Adventure, Thriller"
// Language
// :
// "Hindi"
// Metascore
// :
// "47"
// Plot
// :
// "An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BNDdkNTY1MDQtY2I5MC00OTFlLTg5OWQtZWE2YzE5NWFiMDgzXkEyXkFqcGc@._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "Not Rated"
// Ratings
// :
// (3) [{…}, {…}, {…}]
// Released
// :
// "25 Jan 2023"
// Response
// :
// "True"
// Runtime
// :
// "146 min"
// Title
// :
// "Pathaan"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "Shridhar Raghavan, Abbas Tyrewala, Siddharth Anand"
// Year
// :
// "2023"
// imdbID
// :
// "tt12844910"
// imdbRating
// :
// "5.8"
// imdbVotes
// :
// "160,670"
