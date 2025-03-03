import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className="header">
      <img
        className="airbnblogo"
        src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
        alt="airbnb-logo"
      />

      <div className="search">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="profile">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar/>
      </div>
    </div>
  );
}

export default Header;
//dummy commit
