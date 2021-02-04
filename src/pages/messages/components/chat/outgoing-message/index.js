import * as moment from "moment";
import { constants } from "../../../../../common/constants";

export function OutgoingMessage({ message }) {
  return (
    <div className="message-block">
      <div className="message message--outgoing">
        <p className="message__text">
          {message.text}
          <div className="message__info">
            <div className="float-left">{message.user.email}</div>
            <div className="float-right">
              {moment(message.createdAt).format(constants.dateFormat)}
            </div>
          </div>
        </p>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
