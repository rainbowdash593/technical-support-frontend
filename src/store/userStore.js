import { HttpClient } from "../common/utils/axios";
import { makeAutoObservable } from "mobx";
import commonStore from "./commonStore";

class UserStore {
  authUser = {};
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  fetchAuthUser() {
    this.isLoading = true;
    return HttpClient.post("/users/info")
      .then(({ data }) => {
        this.authUser = data;
      })
      .catch(() => {
        commonStore.setToken(undefined);
        this.forgetAuthUser();
      })
      .finally(() => (this.isLoading = true));
  }

  setAuthUser(user) {
    this.authUser = user;
  }

  forgetAuthUser() {
    this.authUser = undefined;
  }
}

export default new UserStore();
