const moviedetails= document.querySelector("#moviedetails");
const params=new URLSearchParams(location.search);
const imdbID=params.get("id");
 if(imdbID){
     searchMovie(imdbID.trim())
 }

async function searchMovie(imdbID){
  let response =await fetch(`https://www.omdbapi.com/?apikey=3eed3bad&i=${imdbID}&plot=full`);
  let data =await response.json();
  console.log(data);
  
  if(data.Response==="True"){
    displayMovie(data);  
  }
  else{
     moviehub.innerHTML=`<P>${data.Error}</p>`
  }
}


function displayMovie(data){

    moviedetails.innerHTML= `<div>
       <div>
        <img src="${data.Poster}" alt="">
        </div>
        <div>
            <h2> ${data.Title}</h2>
        </div>

        <section>
            <p>${data.Released}</p>
            <p>${data.imdbRating}</p>
            <p>${data.Runtime}</p>
            <p>${data.Rated}</p>
            <p>${data.Genre}</p>
        </section>
        <div>
            <p>Plot Overview</p>
            <p>${data.Plot}</p>
        </div>
        <div>
            <section>
                <p>Director</p>
                <p>${data.Director}</p>
            </section>
            <section>
                <p>Writer</p>
                <p>${data.Writer}</p>
            </section>
        </div>
        <div>
            <p>Actors</p>
            <p>${data.Actors}</p>
        </div>
        <div>
            <p>Language</p>
            <p>${data.Language}</p>
        </div>
        <div>
            <p>Country</p>
            <p>${data.Country}</p>
        </div>
        <div>
              <button>
            <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank" >
                View on IMDb 
            </a>
        </button>
        </div>
        </div>
        `
}
