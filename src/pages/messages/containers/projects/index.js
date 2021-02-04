import React from "react";
import { observer } from "mobx-react-lite";
import ticketsStore from "../../../../store/ticketsStore";
import projectsStore from "../../../../store/projectsStore";
import { BsList, FiChevronLeft, FiChevronRight } from "react-icons/all";
import { Menu, MenuItem } from "../../components/slide-menu";

export const ProjectListContainer = observer(() => {
  function openProjectMenu(project) {
    ticketsStore.setActiveMenu("project");
    ticketsStore.setActiveProject(project);
  }

  function openMainMenu() {
    ticketsStore.setActiveMenu("main");
    ticketsStore.setActiveProject({});
  }

  return (
    <div className="projects-container">
      <div className="sidebar__title">
        {ticketsStore.activeProject.name
          ? ticketsStore.activeProject.name
          : "Сервисы"}
        {ticketsStore.activeProject.name ? (
          <FiChevronLeft className="float-right" onClick={openMainMenu} />
        ) : (
          <BsList className="float-right" />
        )}
      </div>
      <Menu
        in={ticketsStore.ui.activeMenu === "main"}
        classNames="menu-primary"
      >
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

      <Menu
        in={ticketsStore.ui.activeMenu === "project"}
        classNames="menu-secondary"
      >
        {/*<MenuItem iconLeft={<FiChevronLeft />} onClick={openMainMenu}>*/}
        {/*  {ticketsStore.activeProject.name}*/}
        {/*</MenuItem>*/}
      </Menu>
    </div>
  );
});
