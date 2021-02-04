import React from "react";
import { observer } from "mobx-react-lite";
import ticketsStore from "../../../../store/ticketsStore";
import { TicketItemComponent } from "../../components/ticket-item";
import { IoChatboxOutline } from "react-icons/all";
import "./style.css";
import chatStore from "../../../../store/chatStore";
import userStore from "../../../../store/userStore";

export const LastTicketsContainer = observer(() => {
  const isActive = (item) => chatStore.isActive(item);
  return (
    <div className="tickets-container">
      <div className="sidebar__title">
        Сообщения
        <IoChatboxOutline className="float-right" />
      </div>
      <div className="ticket-list">
        {ticketsStore.lastTickets.list.map((item) => {
          return (
            <TicketItemComponent
              key={item._id}
              ticket={item}
              isActive={isActive(item)}
              onClick={() => chatStore.setCurrentTicket(item)}
              authUser={userStore.authUser}
            />
          );
        })}
      </div>
    </div>
  );
});
