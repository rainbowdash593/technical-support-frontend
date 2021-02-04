import React from "react";
import { Redirect } from "react-router-dom";
import authStore from "../../../../store/authStore";
import { RouterDefaults } from "../../../routes";
import { observer } from "mobx-react-lite";

export default observer((props) => {
  return (
    <Redirect
      to={{
        pathname: authStore.isLoggedIn
          ? RouterDefaults.authenticatedRoute
          : RouterDefaults.unauthenticatedRoute,
        state: { from: props.location },
      }}
    />
  );
});
