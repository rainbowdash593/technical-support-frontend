import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import ticketsStore from "../../../../../store/ticketsStore";
import { FiChevronLeft } from "react-icons/all";
import { LastTicketsContainer } from "../../last-tickets";

export const ProjectTabContainer = observer(() => {
  function openMainMenu() {
    ticketsStore.setActiveMenu("main");
    ticketsStore.setActiveProject({});
  }
  return (
    <Fragment>
      <div className="sidebar__title cursor-pointer" onClick={openMainMenu}>
        {ticketsStore.activeProject.name ? ticketsStore.activeProject.name : ""}
        <FiChevronLeft className="float-right" />
      </div>
      <hr />
      <LastTicketsContainer
        tickets={
          ticketsStore.byProject.list.hasOwnProperty(
            ticketsStore.activeProject._id
          )
            ? ticketsStore.byProject.list[ticketsStore.activeProject._id]
            : []
        }
      />
    </Fragment>
  );
});
