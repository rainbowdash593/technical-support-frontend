import { makeAutoObservable } from "mobx";

class CommonStore {
  appName = "";
  token = localStorage.getItem("jwtToken");
  isAppLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token) {
    this.token = token;
    token
      ? localStorage.setItem("jwtToken", token)
      : localStorage.removeItem("jwtToken");
  }

  setAppLoaded() {
    this.isAppLoaded = true;
  }
}

export default new CommonStore();
