import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import ticketsStore from "../../../../store/ticketsStore";
import { SidebarTabComponent } from "../../components/sidebar-tab";
import { MainTabContainer } from "../sidebar/main-tab";
import { ProjectTabContainer } from "../sidebar/project-tab";

export const SidenavTabsContainer = observer(() => {
  return (
    <Fragment>
      <SidebarTabComponent
        in={ticketsStore.ui.activeMenu === "main"}
        classNames="menu-primary"
      >
        <MainTabContainer />
      </SidebarTabComponent>

      <SidebarTabComponent
        in={ticketsStore.ui.activeMenu === "project"}
        classNames="menu-secondary"
      >
        <ProjectTabContainer />
      </SidebarTabComponent>
    </Fragment>
  );
});
