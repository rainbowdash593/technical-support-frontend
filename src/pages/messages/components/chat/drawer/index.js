import React, { useState, Fragment } from "react";
import { Drawer, Button, SelectPicker } from "rsuite";
import { TagInput } from "../../tag-input";
import "./styles.css";
import teamStore from "../../../../../store/teamStore";

export function ChatDrawer({ isReadOnly, ticket, isOpen, close }) {
  const { user, project } = ticket;
  const [team, setTeam] = useState();
  function setTags(tags) {
    console.log(tags);
  }

  function forwardTicket(team) {
    console.log(team);
  }
  return (
    <div className="message-drawer">
      <Drawer show={isOpen} onHide={close} size={"xs"}>
        <Drawer.Header>
          <Drawer.Title>Настройки чата</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          {isReadOnly ? (
            ""
          ) : (
            <Fragment>
              <div>
                <p className="drawer-title">1. Добавить тег</p>
                <TagInput ticket={ticket} onSubmit={setTags} />
              </div>
              <hr />
              <div>
                <p className="drawer-title">2. Передать вопрос</p>
                <SelectPicker
                  className="mt-4"
                  value={team}
                  onChange={(val) => setTeam(val)}
                  data={teamStore.team}
                  block
                  placeholder="Подразделение"
                />
                <div className="text-right mt-6">
                  <Button
                    appearance="primary"
                    onClick={() => forwardTicket(team)}
                  >
                    Отправить
                  </Button>
                </div>
              </div>
              <hr />
            </Fragment>
          )}
          <div>
            <p className="drawer-title">3. Информация о пользователе</p>
            <div className="mt-6">
              <p>
                Проект:{" "}
                <a target="_blank" href={`${project.panelUrl}/panel`}>
                  {project.name}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  target="_blank"
                  href={`${project.panelUrl}/panel/clients/${user.id}`}
                >
                  {user.email}
                </a>
              </p>
              {user.partner ? (
                <p>
                  Партнер:{" "}
                  <a
                    target="_blank"
                    href={`${project.panelUrl}/panel/partners/${user.partner.id}`}
                  >
                    {user.partner.email}
                  </a>
                </p>
              ) : (
                ""
              )}
              {user.manager ? (
                <p>
                  Менеджер:{" "}
                  <a
                    target="_blank"
                    href={`${project.panelUrl}/panel/managers/${user.manager.id}`}
                  >
                    {user.manager.email}
                  </a>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
}
