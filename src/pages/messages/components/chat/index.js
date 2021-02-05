import React, { Fragment, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ChatHeader } from "./header";
import { IncomingMessage } from "./incoming-message";
import { OutgoingMessage } from "./outgoing-message";
import { ChatFooter } from "./footer";
import "./styles.css";

export const ChatComponent = observer(
  ({ ticket, messages, onSend, isReadOnly }) => {
    const chatEnd = useRef();
    function scrollToBottom() {
      if (chatEnd.current)
        chatEnd.current.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(() => {
      scrollToBottom();
    });
    return (
      <Fragment>
        <ChatHeader ticket={ticket} isReadOnly={isReadOnly} />
        <div className="chat">
          {messages.map((message) => {
            return message.type === "incoming" ? (
              <IncomingMessage message={message} />
            ) : (
              <OutgoingMessage message={message} />
            );
          })}
          <div style={{ float: "left", clear: "both" }} ref={chatEnd} />
        </div>
        <ChatFooter onSend={onSend} isReadOnly={isReadOnly} />
      </Fragment>
    );
  }
);
