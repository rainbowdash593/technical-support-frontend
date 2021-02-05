import React from "react";
import { observer } from "mobx-react-lite";
import { TicketItemComponent } from "../../components/ticket-item";
import "./style.css";
import chatStore from "../../../../store/chatStore";
import userStore from "../../../../store/userStore";

export const LastTicketsContainer = observer(({ tickets }) => {
  const isActive = (item) => chatStore.isActive(item);
  return (
    <div className="ticket-list">
      {tickets.map((item) => {
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
  );
});
