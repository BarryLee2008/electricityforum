import { NextPage } from "next";
import { Button, Card, Select } from "antd";
import style from "./jobbank.module.css";
export const Jobbank: NextPage = () => {
  return (
    <div>
      <h3 className={style.header}>
        Electricity Forum <span>JOB BANK</span>
      </h3>
      <div className={style.cardContainer}>
        <Card
          className={style.card}
          hoverable
          cover={
            <img
              width={200}
              src="	https://mscelectrical.com/wp-content/uploads/2017/12/Michigan-Electrical-Contractors-now-hiring.jpg"
              alt="job"
            />
          }
        >
          <Select
            placeholder="Select Suggestion"
            style={{ width: 120 }}
            options={[
              { value: "Smart Grid", label: "Smart Grid" },
              { value: "Overhead TD", label: "Overhead TD" },
              { value: "Lineman Safety", label: "Safety" },
              {
                value: "Electrical Substation",
                label: "Electrical Substation",
              },
            ]}
          />
          <br />
          <Button
            className={style.button}
            type="primary"
            onClick={() => {
              window.open(
                "https://electricityforum.info/electrical-jobs/",
                "_blank"
              );
            }}
          >
            SEARCH JOBS
          </Button>
        </Card>
      </div>
      <div className={style.text}>
        Featured JOBS <br />
        Electrical Maintenance Supervisor
      </div>
      <div>
        <img
          alt="logo"
          src="https://www.electricity-today.com/wp-content/uploads/et-online-magazine-300x74.jpg"
        />
        <div>
          <Button
            type="primary"
            onClick={() => {
              window.open("https://www.electricity-today.com/", "_blank");
            }}
          >
            SUBSCRIBE FOR FREE
          </Button>
        </div>
      </div>
    </div>
  );
};
