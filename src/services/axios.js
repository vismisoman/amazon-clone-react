import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-76330.cloudfunctions.net/api",

  // "http://localhost:5001/challenge-4b2b2/us-central1/api",
  //http://localhost:5001/clone-76330/us-central1/api
});

export default instance;
