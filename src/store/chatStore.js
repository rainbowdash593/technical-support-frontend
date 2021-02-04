import { makeAutoObservable } from "mobx";
import { HttpClient } from "../common/utils/axios";
import ticketsStore from "./ticketsStore";

class ChatStore {
  isLoading = false;
  ticket = {};
  _messages = {};

  constructor() {
    makeAutoObservable(this);
  }

  fetchMessageHistory(ticketId) {
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      HttpClient.get(`/tickets/${ticketId}/messages`)
        .then(({ data }) => {
          this._messages[ticketId] = data;
          resolve(data);
        })
        .catch(() => reject())
        .finally(() => (this.isLoading = false));
    });
  }

  setCurrentTicket(ticket) {
    this.ticket = ticket;
    if (!this._messages.hasOwnProperty(ticket._id)) {
      this._messages[ticket._id] = [];
      this.fetchMessageHistory(ticket._id);
    }
  }

  isActive(ticket) {
    return this.ticket._id === ticket._id;
  }

  appendMessage(ticket, message) {
    this._messages[ticket._id].push(message);
  }

  sendMessage(ticket, text, attachments = []) {
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      HttpClient.post("/ticket-messages/outgoing", {
        text,
        attachments,
        ticket: ticket._id,
      })
        .then(({ data }) => {
          this.appendMessage(ticket, data);
          ticketsStore.updateLastMessage(ticket, data);
          resolve(data);
        })
        .catch(() => reject())
        .finally(() => (this.isLoading = true));
    });
  }

  get messages() {
    return this._messages.hasOwnProperty(this.ticket._id)
      ? this._messages[this.ticket._id]
      : [];
  }
}

export default new ChatStore();
