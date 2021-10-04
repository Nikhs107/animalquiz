import axios from "axios";

const baseURL = "https://boiling-bastion-39171.herokuapp.com";

function get(url) {
  return axios.get(baseURL + url);
}

function post(url, obj) {
  return axios.post(baseURL + url, obj);
}

function put(url, obj) {
  return axios.put(baseURL + url, obj);
}

export default {
  get,
  post,
  put,
};
