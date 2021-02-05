import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import ticketsStore from "../../../../../store/ticketsStore";
import projectsStore from "../../../../../store/projectsStore";
import { Menu, MenuItem } from "../../../components/slide-menu";
import { BsList, FiChevronRight, IoChatboxOutline } from "react-icons/all";
import { LastTicketsContainer } from "../../last-tickets";

export const MainTabContainer = observer(() => {
  function openProjectMenu(project) {
    ticketsStore.setActiveMenu("project");
    ticketsStore.fetchProjectLastTickets(project);
    ticketsStore.setActiveProject(project);
  }

  return (
    <Fragment>
      <div className="projects-container">
        <div className="sidebar__title ">
          Сервисы
          <BsList className="float-right" />
        </div>
        <Menu>
          {projectsStore.projects.map((service) => {
            return (
              <MenuItem
                key={service._id}
                iconRight={<FiChevronRight />}
                onClick={() => openProjectMenu(service)}
              >
                {service.name}
              </MenuItem>
            );
          })}
        </Menu>
        <hr />
        <div className="tickets-container">
          <div className="sidebar__title">
            Сообщения
            <IoChatboxOutline className="float-right" />
          </div>
          <LastTicketsContainer tickets={ticketsStore.lastTickets.list} />
        </div>
      </div>
    </Fragment>
  );
});
