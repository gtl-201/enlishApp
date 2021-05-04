import axios from 'axios'

export default axios.create({
    baseURL: "https://my-json-server.typicode.com/gtl-201/serverJson",
    timeout: 1000
  });