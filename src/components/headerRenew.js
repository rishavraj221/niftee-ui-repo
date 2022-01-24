import React from "react";

import Icon from "../assets/Icons";
import "./headerRenew.css";

const Header = () => {
  return (
    <div className="header-container">
      <Icon name="profile" />
      <div className="header-settings">
        <Icon name="settings" />
        <div style={{ position: "relative" }}>
          <div
            className="settings-menu-container"
            onClick={() => {
              localStorage.removeItem("x-auth-token");
              window.location.reload();
            }}
          >
            <Icon name="logout" size="25" color="rgb(156, 156, 156)" />
            <div className="logout-text">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
