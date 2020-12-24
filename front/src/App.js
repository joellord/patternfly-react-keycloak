import './App.css';
import React from "react";
import { KeycloakProvider } from "react-keycloak";
import keycloak from "./keycloak";
import { AppRouter } from "./routes";

import "@patternfly/patternfly/patternfly.css"

function App() {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <div className="App">
        <AppRouter />
      </div>
    </KeycloakProvider>
  );
}

export default App;
