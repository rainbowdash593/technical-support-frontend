import { makeAutoObservable } from "mobx";
import commonStore from "./commonStore";
import userStore from "./userStore";
import { HttpClient } from "../common/utils/axios";

class AuthStore {
  isLoading = false;
  fields = {
    email: "",
    password: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(email) {
    this.fields.email = email;
  }

  setPassword(password) {
    this.fields.password = password;
  }

  resetFields() {
    this.fields.password = "";
    this.fields.email = "";
  }

  signIn() {
    this.isLoading = true;
    return HttpClient.post("/auth/sign-in", this.fields)
      .then(({ data }) => {
        console.log(data);
        userStore.setAuthUser(data);
        commonStore.setToken(data.accessToken);
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    commonStore.setToken(undefined);
    userStore.forgetAuthUser();
  }

  get isLoggedIn() {
    return !!commonStore.token;
  }
}

export default new AuthStore();
