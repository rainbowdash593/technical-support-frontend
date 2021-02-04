import Axios from "axios";
import commonStore from "../../store/commonStore";

Axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BASE_URL
    : `${window.location.origin}`;

const authToken = commonStore.token ? `Bearer ${commonStore.token}` : "";

Axios.defaults.headers.common.Authorization = Axios.defaults.headers.common
  .Authorization
  ? Axios.defaults.headers.common.Authorization
  : authToken;

export const HttpClient = Axios.create();
