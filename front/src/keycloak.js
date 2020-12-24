import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "http://localhost:8080/auth",
  realm: "myrealm",
  clientId: "myclient"
};

const keycloak = new Keycloak(keycloakConfig);
export default keycloak;