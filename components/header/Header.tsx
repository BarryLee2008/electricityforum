import { NextPage } from "next";
import Link from "next/link";
import style from "./header.module.css";
import { Button, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Login, Register, Navigation } from "components/index";

import { DropdownUser } from "./userButton";
import React, { useEffect, useState } from "react";
import request from "service/fetch";

export const HeaderComponent: NextPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [registerOpen, setRegisterOpen] = React.useState<boolean>(false);
  const handleOpen = (ifopen: boolean) => {
    setOpen(ifopen);
  };
  const handleRegisterOpen = (ifOpen: boolean) => {
    setRegisterOpen(ifOpen);
  };
  const openRegisterPage = () => {
    setRegisterOpen(true);
  };
  const openLoginPage = () => {
    //console.log("aaa");
    setOpen(true);
  };
  const [token, setToken] = useState<string | null>("");

  const handleToken = (token: string) => {
    setToken(token);
  };
  useEffect(() => {
    if (typeof window) {
      if (window.localStorage.getItem("token")) {
        console.log(window.localStorage.getItem("token"));
        request
          .post("/api/user/verifylogin", {
            token: window.localStorage.getItem("token"),
          })
          .then((data) => {
            setToken(window.localStorage.getItem("token"));
          })
          .catch((error) => {
            console.log(error);
            setToken("");
            window.localStorage.removeItem("token");
            message.warning("The login status has expired, please login again");
          });
      } else {
        setToken("");
      }
    }
  }, [token]);

  return (
    <div className={style.headerContainer}>
      <div className={style.headerTop}>
        <div className={style.headerExternal}>
          <div>
            <Link href={"https://www.electricity-today.com/"}>
              ELECTRICITY TODAY MAGAZINE
            </Link>
          </div>
          <div>
            <Link href={"https://www.intelligent-power-today.com/"}>
              INTELLIGENT POWER TODAY MAGAZINE
            </Link>
          </div>
          <div>ARC FLASH CLOTHING</div>
        </div>
      </div>
      <div className={style.headerMainBody}>
        <div className={style.headerLogo}>
          <img
            className={style.img}
            src="https://electricityforum.info/layout2/index_files/logo_header.png"
            alt="logo"
          />
        </div>
        <div className={style.headerName}>
          <div className={style.nameContainer}>
            <div className={style.name}>Electricity Forum</div>
            <div className={style.slogan}>
              <span>Content</span>
              <span>Community</span>
              <span>Connection</span>
            </div>
          </div>
        </div>
        <div className={style.headerAction}>
          <div className={style.actionContainer}>
            <span className={style.join} onClick={openRegisterPage}>
              JOIN
            </span>
            <span>
              {token ? (
                <DropdownUser />
              ) : (
                <Button type="primary" onClick={openLoginPage}>
                  Login
                </Button>
              )}
            </span>
            <span className={style.search}>
              <SearchOutlined style={{ color: "blue" }} />
            </span>
          </div>
        </div>
      </div>
      <Login open={open} handleOpen={handleOpen} handleToken={handleToken} />
      <Register open={registerOpen} handleOpen={handleRegisterOpen} />
      <Navigation />
    </div>
  );
};
