let movieList = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Lord of the Rings", "Pulp Fiction", "Schindler's List", "The Good, the Bad and the Ugly", "Star Wars"];

let searchButton = document.getElementById("search-button");
let movieInput = document.getElementById("movie-input");
let result = document.getElementById("result");

result.style.textAlign = "center";

searchButton.addEventListener("click", function(){
    let foundMovie = false; 
    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].toLowerCase() === movieInput.value.toLowerCase()) {
        foundMovie = true;
        break;
      }
    }
    if(foundMovie){
        result.innerHTML = "The Movie can be rented";
        result.style.color = "green";
    } else {
        result.innerHTML = "The Movie can't be rented";
        result.style.color = "red";
    }
});