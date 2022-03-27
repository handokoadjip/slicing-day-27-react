import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionTitle,
  SectionContent,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Katie G Design | L'Essenziale";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <SectionTitle />
          <SectionContent />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
