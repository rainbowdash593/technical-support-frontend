import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ticketsStore from "../../../../store/ticketsStore";
import chatStore from "../../../../store/chatStore";
import { ChatComponent } from "../../../messages/components/chat";
import { Fallback } from "../../../../common/components/fallback";

export const MessageHistoryContainer = observer(() => {
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    ticketsStore
      .fetchTicketInfo(id)
      .then(({ data }) => {
        chatStore.setCurrentTicket(data).then(() => setLoading(false));
      })
      .catch(() => {
        history.push("/404");
      });
    chatStore.fetchMessageHistory(id);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Fallback />
      ) : (
        <ChatComponent
          isReadOnly={true}
          ticket={chatStore.ticket}
          messages={chatStore.messages}
        />
      )}
    </div>
  );
});
