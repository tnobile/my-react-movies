const url = "http://api.tvmaze.com/search/";
const proxyUrl="https://myproxyfunctions.azurewebsites.net/api/proxyfunctions"
//const proxyUrl="http://localhost:7071/api/ProxyFunctions"

export const getMovies = async (keyword) => {
   if (!keyword) {
      console.log("keyword is null")
      return;
   }

   const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({"myurl" : `${url}shows?q=${keyword}`})
   });
   const data = await response.json();
   return data.filter(d => d.show.image);
}

export const getMoviesByPerson = async (person) =>{
   if(!person) return;
   const response = await fetch(`${url}people?q=${person}`);
   const data = await response.json();
   return data;
}

