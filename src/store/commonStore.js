import { makeAutoObservable } from "mobx";
import { HttpClient } from "../common/utils/axios";

class CommonStore {
  appName = "";
  token = localStorage.getItem("jwtToken");
  isAppLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token) {
    this.token = token;
    if (token) {
      HttpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("jwtToken", token);
    } else {
      HttpClient.defaults.headers.common.Authorization = "";
      localStorage.removeItem("jwtToken");
    }
  }

  setAppLoaded() {
    this.isAppLoaded = true;
  }
}

export default new CommonStore();
