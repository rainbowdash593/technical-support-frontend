import React from "react";
import { observer } from "mobx-react-lite";
import chatStore from "../../../../store/chatStore";
import { ChatComponent } from "../../components/chat";
import "./styles.css";

export const ChatContainer = observer(() => {
  function sendMessage(text, attachments = []) {
    chatStore.sendMessage(chatStore.ticket, text, attachments);
  }
  return (
    <div className="chat-container">
      {chatStore.ticket._id ? (
        <ChatComponent
          ticket={chatStore.ticket}
          messages={chatStore.messages}
          onSend={sendMessage}
        />
      ) : (
        ""
      )}
    </div>
  );
});
