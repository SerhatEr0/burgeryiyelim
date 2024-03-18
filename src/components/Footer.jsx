import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon style={{ fontSize: "48px" }} />
        <InstagramIcon style={{ fontSize: "48px" }} />
        <TwitterIcon style={{ fontSize: "48px" }} />
      </div>
      <p>Tüm hakları saklıdır | Burger Yiyelim</p>
    </div>
  );
}

export default Footer;
