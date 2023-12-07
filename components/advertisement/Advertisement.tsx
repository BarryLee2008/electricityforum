import { NextPage } from "next";
import style from "./advertisement.module.css";
interface propsType {
  imgURL: string;
  link: string;
}

export const Advertisement: NextPage<propsType> = ({ imgURL, link }) => {
  return (
    <div className={style.container}>
      <div className={style.coreArea}>
        <a target="_blank" href={link}>
          <img
            src={imgURL}
            alt="ad"
            style={{ width: "100%", height: "100px" }}
          />
        </a>
      </div>
    </div>
  );
};
