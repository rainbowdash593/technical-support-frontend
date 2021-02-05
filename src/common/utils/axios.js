import Axios from "axios";

Axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BASE_URL
    : `${window.location.origin}`;

const authToken = localStorage.getItem("jwtToken")
  ? `Bearer ${localStorage.getItem("jwtToken")}`
  : "";

Axios.defaults.headers.common.Authorization = Axios.defaults.headers.common
  .Authorization
  ? Axios.defaults.headers.common.Authorization
  : authToken;

export const HttpClient = Axios.create();
