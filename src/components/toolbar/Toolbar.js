import React from "react";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const ToolBar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">PRODUCTS</a>
          </li>
          <li>
            <a href="/">USERS</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default ToolBar;
