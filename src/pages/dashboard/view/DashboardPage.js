import React, { useEffect } from "react";
import { SidebarContainer } from "../containers/sidenav";
import { Switch } from "react-router-dom";
import io from "socket.io-client";
import { RouteWithSubRoutes } from "../../../common/components/RouterConfiguration";
import notificationAudio from "../../../common/utils/audio";
import chatStore from "../../../store/chatStore";
import ticketsStore from "../../../store/ticketsStore";

export default function DashboardPage({ routes }) {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_WS_ENDPOINT);
    socket.on("team_message", (data) => {
      notificationAudio.play();
      console.log(data);
    });
    socket.on("ticket_message", (data) => {
      notificationAudio.play();
      ticketsStore.newMessage(data);
      chatStore.newMessage(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="dashboard">
      <SidebarContainer />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
