import React from "react";
import { Page, PageHeader, PageSection, PageSectionVariants, Button } from "@patternfly/react-core";
import { Redirect } from "react-router-dom";
import { useKeycloak } from "react-keycloak";

const Home = () => {
  const {keycloak, initialized} = useKeycloak();
  
  const Header = (
    <PageHeader logo="#" />
  )

  return (
    <Page header={Header}>
      <PageSection variant={PageSectionVariants.dark}>
        <h1>Welcome!</h1>
        <p>Please login</p>

      {initialized ?
        keycloak.authenticated && <div><Redirect to="/cfp" /></div>
        : <h2>Keycloak initializing</h2>
      }

      <Button variant="primary" onClick={() => keycloak.login()}>Login</Button>

      </PageSection>
    </Page>
    )
}

export default Home;