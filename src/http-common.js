
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
// const API = axios.create({
//     baseURL: "http://localhost:8080/api",
//     headers: {
//       "Content-type": "application/json"
//     },
//     withCredentials: true,
//   });
// export default http-common;