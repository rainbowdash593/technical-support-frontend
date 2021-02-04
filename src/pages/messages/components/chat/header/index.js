import { FaUserCircle, IoOptions } from "react-icons/all";
import { Button, Tag, TagGroup } from "rsuite";

export function ChatHeader({ ticket }) {
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
        <Button appearance="ghost">
          <IoOptions icon="linkedin" /> Настройки
        </Button>
      </div>
    </div>
  );
}
