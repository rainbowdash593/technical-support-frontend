import { makeAutoObservable } from "mobx";
import { HttpClient } from "../common/utils/axios";

class TeamStore {
  isLoading = false;
  groups = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchGroups() {
    if (this.groups.length) return;
    this.isLoading = true;
    return HttpClient.get("/team")
      .then(({ data }) => {
        this.groups = data;
      })
      .finally(() => (this.isLoading = false));
  }

  get team() {
    return this.groups.map((item) => ({ value: item._id, label: item.name }));
  }
}

export default new TeamStore();
