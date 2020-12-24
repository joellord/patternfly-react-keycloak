import React, { Component } from "react";
import Layout from "../components/Layout";
import { PageSection, PageSectionVariants, TextContent, Text } from "@patternfly/react-core";

export default class Cfp extends Component {
  render() {
    return (
      <Layout>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">List of CFPs</Text>
            <Text component="p">
              Here is a list of CFPs. You can add your own or mark them as submitted.
            </Text>
          </TextContent>
        </PageSection>
      </Layout>    
    )
  }
}