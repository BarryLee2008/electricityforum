import { NextPage } from "next";
import style from "./footer.module.css";
export const FooterComponent: NextPage = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.logo}>
          <div>
            <img
              className={style.img}
              src="https://electricityforum.info/images/logo_footer.png"
              alt="logo"
            />
          </div>
          <div className={style.copyright}>
            Copyright @ 2023. <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
      <div className={style.information}>
        <div style={{ color: "white", marginTop: "50px" }}>
          <h3>About Our Company</h3>
          <p>
            Electricity Forum publishes Electricity Today T&D Magazine and
            Intelligent Power Today Industrial Electrical Magazine. We publish
            electrical technical handbooks and associated digital magazine
            advertising supplements. Our Electrical Training Institute is a
            leader in electrical training, through public enrolment electrical
            courses as well as on-line electrical training courses and webinars.
          </p>
        </div>
        <div className={style.contact}>
          <div>
            The Electricity Forum (In Canada) 1885 Clements Rd, Unit 218
            Pickering, ON L1W3V4 <br />
            <br />
            Tel 905-686-1040 <br />
            Fax 905-686-1078 <br />
            Toll Free: 855-824-6131
          </div>
          <div>
            The Electricity Forum Inc. (USA) 742 Pre Emption Road Geneva, NY
            14456 <br />
            <br />
            Tel 289-387-1025
          </div>
        </div>
      </div>
      <div className={style.atags}>
        <h3>Popular Pages</h3>
        <div>
          <a>Electrical Training Course Schedule</a>
        </div>
        <div>
          <a>Electrical Training</a>
        </div>
        <div>
          <a>Electricity Today T&D Magazine</a>
        </div>
        <div>
          <a>Intelligent Power Today Magazine</a>
        </div>
        <div>
          <a>Arc Flash Training.ca</a>
        </div>
        <div>
          <a>Arc Flash Clothing.com</a>
        </div>
        <div>
          <a>Renewable Energy Forum</a>
        </div>
        <div>
          <a>Sitemap</a>
        </div>
        <div>
          <a>Contact Us</a>
        </div>
        <div>
          <a>About Us</a>
        </div>
        <div>
          <a>Privacy Policy</a>
        </div>
        <div>
          <a>Concellation and Refund Policy</a>
        </div>
      </div>
    </div>
  );
};
