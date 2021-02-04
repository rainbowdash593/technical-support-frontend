import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { routes } from "./pages/routes";
import { RouterConfiguration } from "./common/components/RouterConfiguration";
import { Fallback } from "./common/components/fallback";
import commonStore from "./store/commonStore";
import userStore from "./store/userStore";
import { ToastContainer, toast } from "react-toastify";
import { IconContext } from "react-icons";

import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

const App = observer(() => {
  useEffect(() => {
    if (commonStore.token) {
      userStore.fetchAuthUser().finally(() => commonStore.setAppLoaded());
    } else commonStore.setAppLoaded();
  }, []);

  toast.configure({
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return (
    <div className="App">
      <IconContext.Provider value={{ className: "r-icon" }}>
        {commonStore.isAppLoaded ? (
          <RouterConfiguration routes={routes} />
        ) : (
          <Fallback />
        )}
      </IconContext.Provider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
});

export default App;
