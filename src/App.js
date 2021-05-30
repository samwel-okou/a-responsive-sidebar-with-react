import React, { Component } from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Toolbar from "./components/toolbar/Toolbar";

export class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !this.state.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ width: "100vh" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: "64px" }}>
          <p>This a page content!!</p>
        </main>
      </div>
    );
  }
}

export default App;
