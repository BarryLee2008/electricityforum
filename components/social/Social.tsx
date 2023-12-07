import { NextPage } from "next";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import style from "./social.module.css";
export const Social: NextPage = () => {
  return (
    <div className={style.social}>
      <div>
        <a href="https://www.facebook.com/theelectricityforum/" target="_blank">
          <FacebookOutlined />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/company/electricityforum/"
          target="_blank"
        >
          <LinkedinOutlined />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/EFTICanada" target="_blank">
          <TwitterOutlined />
        </a>
      </div>
      <div>
        <MailOutlined />
      </div>
    </div>
  );
};
