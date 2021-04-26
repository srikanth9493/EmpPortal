import axios from 'axios'

let instance = axios.create({
  baseURL: "https://empportalbackend.herokuapp.com/",
});

export default instance;