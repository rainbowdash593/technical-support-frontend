import React, { useEffect, Fragment } from "react";
import { observer } from "mobx-react-lite";
import { MessagesSidebarContainer } from "../containers/sidebar";
import { ChatContainer } from "../containers/chat";
import projectsStore from "../../../store/projectsStore";
import ticketsStore from "../../../store/ticketsStore";
import teamStore from "../../../store/teamStore";

export default observer(() => {
  useEffect(() => {
    projectsStore.fetchProjects();
    ticketsStore.fetchLastTickets();
    teamStore.fetchGroups();
  }, []);
  return (
    <Fragment>
      <MessagesSidebarContainer />
      <ChatContainer />
    </Fragment>
  );
});
