import React from "react";

import "./Appbar.css";
import useAuth from "../../util/useAuth";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Services/authServices";

const Appbar = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  return (
    <div className="appbar">
      <div className="appbar__inner">
        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" /> */}
        <h3
          style={{
            fontSize: 24,
            borderBottom: "1.4px solid #000",
            paddingBottom: 8,
          }}
        >
          <span style={{ paddingLeft: 14, paddingRight: 14 }}>
            Url Shortener
          </span>
        </h3>

        <div className="appbar__menus">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link className="active" style={{ marginRight: 30 }} to="/">
              Dashboard{" "}
            </Link>
            <Link to="/profile" style={{ marginRight: 30 }}>
              Profile{" "}
            </Link>

            {isLoggedIn ? (
              <Button
                label="logout"
                variant="outlined-secondary"
                onClick={() => logout(navigate)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
