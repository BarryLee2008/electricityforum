import { Divider, Card } from "antd";
import { NextPage } from "next";
import style from "./news.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
export const News: NextPage = () => {
  return (
    <div className={style.container}>
      <h3 className={style.header}>LATEST ELECTRICAL INDUSTRY NEWS</h3>
      <Divider />
      <div className={style.bignews}>
        <Card
          hoverable
          cover={
            <img
              src="	https://www.investopedia.com/thmb/VTyOizYS9lAr3xeh7if8EiCpVbM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1494888410-c8b4c4bc55814f31bc437713b8467636.jpg"
              alt="png"
            />
          }
        >
          <Card.Meta title="SALES OF ELECTRICAL CARS TOP 20% IN CALIFONIA, LED BY TESLA" />
          <a
            className={style.read}
            target="_blank"
            href="https://cleantechnica.com/2023/11/03/sales-of-electric-cars-top-20-in-california-led-by-tesla-model-y-charts/"
          >
            Read More
            <ArrowRightOutlined />
          </a>
        </Card>
      </div>
      <Divider />
      <div className={style.smallNewsArea}>
        <div className={style.smallNews}>
          <Card
            hoverable
            cover={
              <img
                src="https://www.investopedia.com/thmb/VTyOizYS9lAr3xeh7if8EiCpVbM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1494888410-c8b4c4bc55814f31bc437713b8467636.jpg"
                alt="png"
              />
            }
          >
            <Card.Meta title="SALES OF ELECTRICAL CARS TOP 20% IN CALIFONIA, LED BY TESLA" />
            <a
              className={style.read}
              target="_blank"
              href="https://cleantechnica.com/2023/11/03/sales-of-electric-cars-top-20-in-california-led-by-tesla-model-y-charts/"
            >
              Read More
              <ArrowRightOutlined />
            </a>
          </Card>
        </div>
        <div className={style.smallNews}>
          <Card
            style={{ height: "100%" }}
            hoverable
            cover={
              <img
                src="https://www.squamishchamber.com/wp-content/uploads/2018/01/squamish-sunset-1024x427.jpg"
                alt="png"
              />
            }
          >
            <Card.Meta title="B.C. ordered to pay $10M for denying Squamish power project" />
            <a
              className={style.read}
              target="_blank"
              href="https://www.newwestrecord.ca/highlights/bc-ordered-to-pay-10m-for-denying-squamish-power-project-7674716"
            >
              Read More
              <ArrowRightOutlined />
            </a>
          </Card>
        </div>
        <div className={style.smallNews}>
          <Card
            hoverable
            cover={
              <img
                src="https://media.licdn.com/dms/image/D5612AQHgz5CKGUqxdQ/article-cover_image-shrink_720_1280/0/1700256658444?e=1707350400&v=beta&t=rZgERaBo792PpreD6YKXe3t3d0jQZOqMb8cdJA-G1ok"
                alt="png"
              />
            }
          >
            <Card.Meta title="Florida says no to $400M in federal solar energy incentives" />
            <a
              className={style.read}
              target="_blank"
              href="https://www.linkedin.com/pulse/florida-says-400m-federal-solar-energy-incentives-randolph-w-hurst-hpuzc/?trk=public_post_main-feed-card_feed-article-content"
            >
              Read More
              <ArrowRightOutlined />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};
