const url= "http://api.tvmaze.com/search/shows?q=";
export const getMovies =async (keyword) => {
   const response = await fetch(url+keyword)
   const data = response.json();
   return data;
}
