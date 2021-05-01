const url = "http://api.tvmaze.com/search/";
export const getMovies = async (keyword) => {
   if (!keyword) {
      console.log("keyword is null")
      return;
   }
   const response = await fetch(`${url}shows?q=${keyword}`);
   const data = await response.json();
   return data.filter(d => d.show.image);
}

export const getMoviesByPerson = async (person) =>{
   if(!person) return;
   const response = await fetch(`${url}people?q=${person}`);
   const data = await response.json();
   return data;
}

