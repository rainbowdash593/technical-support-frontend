import { makeAutoObservable } from "mobx";
import { HttpClient } from "../common/utils/axios";

class TicketsStore {
  activeProject = {};
  lastTickets = {
    isLoading: false,
    isLoaded: false,
    list: [],
  };
  ui = {
    activeMenu: "main",
  };

  constructor() {
    makeAutoObservable(this);
  }

  fetchLastTickets() {
    this.lastTickets.isLoading = true;
    return HttpClient.get("/tickets/last")
      .then(({ data }) => {
        this.lastTickets.list = data;
        this.lastTickets.isLoaded = true;
        console.log(data);
      })
      .finally(() => (this.lastTickets.isLoading = false));
  }

  setActiveMenu(menu) {
    this.ui.activeMenu = menu;
  }
  setActiveProject(project) {
    this.activeProject = project;
  }

  updateLastMessage(ticket, message) {
    const touchedTicket = this.lastTickets.list.find(
      (item) => item._id === ticket._id
    );
    if (touchedTicket) {
      touchedTicket.lastMessage = message;
      touchedTicket.lastMessageAt = message.createdAt;
      this.lastTickets.list = this.lastTickets.list
        .slice()
        .sort((a, b) => new Date(b.lastMessageAt) - new Date(a.lastMessageAt));
    }
  }
}

export default new TicketsStore();
