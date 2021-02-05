import { makeAutoObservable } from "mobx";
import { HttpClient } from "../common/utils/axios";

class TicketsStore {
  activeProject = {};
  lastTickets = {
    isLoading: false,
    isLoaded: false,
    list: [],
  };
  byProject = {
    isLoading: false,
    list: {},
  };
  ui = {
    isLoading: false,
    activeMenu: "main",
  };

  constructor() {
    makeAutoObservable(this);
  }

  fetchTicketInfo(ticketId) {
    this.ui.isLoading = true;
    console.log(ticketId);
    return HttpClient.get(`/tickets/${ticketId}`).finally(
      () => (this.ui.isLoading = false)
    );
  }

  fetchLastTickets() {
    this.lastTickets.isLoading = true;
    return HttpClient.get("/tickets/last")
      .then(({ data }) => {
        this.lastTickets.list = data;
        this.lastTickets.isLoaded = true;
      })
      .finally(() => (this.lastTickets.isLoading = false));
  }

  setActiveMenu(menu) {
    this.ui.activeMenu = menu;
  }

  setActiveProject(project) {
    this.activeProject = project;
  }

  newMessage(message) {
    const onLastTicket = this.lastTickets.list.find(
      (ticket) => ticket._id === message.ticket._id
    );
    if (onLastTicket) {
      this.updateLastMessage(onLastTicket, message);
    }
    const byProject = this.byProject.list[message.ticket.project];
    if (byProject) {
      const onByProjectTicket = this.byProject.list[
        message.ticket.project
      ].find((item) => item._id === message.ticket._id);
      if (onByProjectTicket)
        this.updateByProjectMessage(onByProjectTicket, message);
    }
  }

  fetchProjectLastTickets(project) {
    if (this.byProject.list.hasOwnProperty(project._id)) return;
    this.byProject.isLoading = true;
    return HttpClient.get(`/tickets/last/${project._id}`)
      .then(({ data }) => {
        this.byProject.list[project._id] = data;
      })
      .finally(() => (this.byProject.isLoading = false));
  }

  updateByProjectMessage(ticket, message) {
    const projectId = ticket.project._id;

    const byProject = this.byProject.list[projectId];
    if (byProject) {
      const onByProjectTicket = this.byProject.list[projectId].find(
        (item) => item._id === message.ticket._id
      );
      console.log(onByProjectTicket);
      if (onByProjectTicket) {
        onByProjectTicket.lastMessage = message;
        onByProjectTicket.lastMessageAt = message.createdAt;
        this.byProject.list[projectId] = this.byProject.list[projectId]
          .slice()
          .sort(
            (a, b) => new Date(b.lastMessageAt) - new Date(a.lastMessageAt)
          );
      }
    }
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
