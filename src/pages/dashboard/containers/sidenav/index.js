import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Toggle, Sidenav, Nav, Dropdown, Icon } from "rsuite";
import {
  GoDashboard,
  FiSettings,
  AiOutlineTeam,
  BiChat,
  FiLogOut,
} from "react-icons/all";
import logoImage from "../../../../assets/images/logo3.png";
import profileImage from "../../../../assets/images/profile.png";
import "./styles.css";

export const SidebarContainer = observer(() => {
  const [activeKey, setActiveKey] = useState();

  const headerStyles = {
    padding: 20,
    fontSize: 16,
    background: "#34c3ff",
    color: " #fff",
  };

  return (
    <div className="sidenav-container">
      {/*<Toggle onChange={this.handleToggle} checked={expanded} />*/}
      {/*<hr />*/}
      <Sidenav
        expanded={false}
        defaultOpenKeys={["3", "4"]}
        activeKey={activeKey}
        onSelect={() => console.log("Select")}
        className="sidenav"
      >
        <Sidenav.Header className="sidenav__header">
          <div className={"sidenav__logo"}>
            <img src={logoImage} width="60px" />
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <div className="sidenav__avatar">
            <img src={profileImage} width="50px" />
            <p>Дмитрий</p>
          </div>
          <hr />
          <Nav>
            <Link to="/dashboard/messages">
              <Nav.Item
                eventKey="1"
                icon={<BiChat className="sidenav__icon" />}
              >
                Чаты
              </Nav.Item>
            </Link>
            <Nav.Item
              eventKey="2"
              icon={<AiOutlineTeam className="sidenav__icon" />}
            >
              Комманда
            </Nav.Item>
            <Nav.Item
              eventKey="3"
              icon={<FiSettings className="sidenav__icon" />}
            >
              Настройки
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <div className="sidenav__footer">
          <Nav>
            <Nav.Item
              eventKey="4"
              icon={<FiLogOut className="sidenav__icon" />}
            >
              Выйти
            </Nav.Item>
          </Nav>
        </div>
      </Sidenav>
    </div>
  );
});
