import axios from "axios";

//The instance is configured so that all requests made using it will be prefixed with the base URL: https://api.themoviedb.org/3.

//The key baseURL tells Axios to Prepend this URL to all relative request paths.
//instance inherits all the same HTTP methods as the main axios object 

//base_url + backdrop_path gives the banner image of the movie(bigger image than the poster path)
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;