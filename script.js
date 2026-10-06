let form=document.querySelector("#form")
let input=document.querySelector("#input")
let moviehub=document.querySelector("#moviehub")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let query=input.value.trim();
     if(!query) return;
     searchMovies(query);
    
})

async function searchMovies(moviename){
    moviehub.innerHTML=`<P>Searching Movie......</P>`;
    let response=await fetch(`http://www.omdbapi.com/?apikey=3eed3bad&s=${moviename}`);
    let data= await response.json();
    console.log(data);

    if(data.Response==="True"){
        displayMovies(data.Search);
    }
    else{
        moviehub.innerHTML=`<P>${data.Error}</P>`
    }
}


function displayMovies(data){
    moviehub.innerHTML="";
    data.forEach((movie)=>{
      const div=document.createElement("div");
      div.setAttribute("class","movie-cart");
      div.dataset.id=movie.imdbID;
      div.innerHTML=`
          <div>
            <img src=${movie.Poster} alt="">
        </div>
        <div>
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
        </div>
      
      `
       moviehub.append(div);
    })

}

moviehub.addEventListener("click",(e)=>{
    const movie=e.target.closest(".movie-cart");
    const id=movie.dataset.id;
    location.href=`moviedetails.html?id=${id}`
})