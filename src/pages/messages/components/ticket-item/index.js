import React from "react";
import "./styles.css";
import { FaUserCircle } from "react-icons/all";
import { TagGroup, Tag } from "rsuite";

export function TicketItemComponent({ ticket, isActive, onClick, authUser }) {
  console.log(authUser);
  function createdByAuthUser(message) {
    return (
      message && authUser && message.user && message.user._id === authUser._id
    );
  }
  return (
    <div
      className={"ticket-item " + (isActive ? "ticket-item--active" : "")}
      onClick={onClick}
    >
      <div className="ticket-item__avatar">
        <FaUserCircle size={35} />
      </div>
      <div className="ticket-item__info">
        <div className="text-concat-1 ticket-item__email">
          {ticket.user.email}
        </div>
        <div className="text-concat-1 mt-1">
          {createdByAuthUser(ticket.lastMessage) ? <span>Вы: </span> : ""}
          {ticket.lastMessage ? ticket.lastMessage.text : "Нет данных..."}
        </div>
        <TagGroup>
          <Tag className="small" style={{ marginTop: "20px" }} color="violet">
            {ticket.project.name}
          </Tag>
        </TagGroup>
      </div>
    </div>
  );
}
