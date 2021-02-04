import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Panel, Form, ButtonToolbar, Button } from "rsuite";
import { TextField } from "../../components/text-field";
import { observer } from "mobx-react-lite";
import authStore from "../../../../store/authStore";
import "./styles.css";

export const SignInContainer = observer(() => {
  const history = useHistory();

  const handleSubmitForm = () => {
    authStore
      .signIn()
      .then(() => {
        history.push("/");
      })
      .catch(({ response }) => toast.error(response.data.message));
  };

  return (
    <Panel className="form text-center" header={"Вход"}>
      <Form className="text-left" onSubmit={handleSubmitForm}>
        <TextField
          size="lg"
          name="email"
          type="email"
          label="Email"
          value={authStore.fields.email}
          onChange={(val) => authStore.setEmail(val)}
        />
        <TextField
          size="lg"
          name="password"
          type="password"
          label="Пароль"
          value={authStore.fields.password}
          onChange={(val) => authStore.setPassword(val)}
        />
        <ButtonToolbar className="text-center text-lg">
          <Button
            className="w-full"
            size="lg"
            appearance="primary"
            type="submit"
          >
            Вход
          </Button>
        </ButtonToolbar>
      </Form>
    </Panel>
  );
});
