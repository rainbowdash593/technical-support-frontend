import { FaUserCircle } from "react-icons/all";
import * as moment from "moment";
import { constants } from "../../../../../common/constants";

export function IncomingMessage({ message }) {
  return (
    <div className="message-block">
      <div className="message message--incoming">
        <div>
          <FaUserCircle size={35} className="mr-2" />
        </div>
        <p className="message__text">
          {message.text}
          <div className="message__info">
            <div>{message.relatedUser.email}</div>
            <div>{moment(message.createdAt).format(constants.dateFormat)}</div>
          </div>
        </p>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
