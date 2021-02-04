import { makeAutoObservable } from "mobx";
import { HttpClient } from "../common/utils/axios";

class ProjectsStore {
  isLoading = false;
  isLoaded = false;
  projects = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchProjects() {
    this.isLoading = true;
    return HttpClient.get("/projects")
      .then(({ data }) => {
        this.projects = data;
        console.log(data);
        this.isLoaded = true;
      })
      .finally(() => (this.isLoading = false));
  }
}

export default new ProjectsStore();
