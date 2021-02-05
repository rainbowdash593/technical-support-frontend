import React, { useState } from "react";
import { FaUserCircle, IoOptions } from "react-icons/all";
import { Button, Tag, TagGroup } from "rsuite";
import { ChatDrawer } from "../drawer";

export function ChatHeader({ isReadOnly, ticket }) {
  const [isDrawerOpened, toggleDrawer] = useState(false);
  return (
    <div className="chat__header">
      <div>
        <FaUserCircle size={45} />
      </div>
      <div className="chat__user-info">
        <p className="pb-1">{ticket.user.email}</p>
        <TagGroup>
          <Tag color="violet">{ticket.project.name}</Tag>
        </TagGroup>
      </div>
      <div className="chat__options-button">
        <Button appearance="ghost" onClick={() => toggleDrawer(true)}>
          <IoOptions icon="linkedin" /> Настройки
        </Button>
      </div>
      <ChatDrawer
        isReadOnly={isReadOnly}
        ticket={ticket}
        isOpen={isDrawerOpened}
        close={() => toggleDrawer(false)}
      />
    </div>
  );
}
