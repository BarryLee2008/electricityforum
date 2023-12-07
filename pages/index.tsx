import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Training, News, Jobbank, Social } from "components/index";
import { Col, Row, Grid } from "antd";
import { Advertisement } from "components";
const Home: NextPage = () => {
  const screens = Grid.useBreakpoint();
  if ((screens.xs || screens.sm || screens.md || !screens.lg) && !screens.xl) {
    return (
      <>
        <Social />
        <div className={styles.partOneContainer}>
          <Advertisement
            imgURL="https://www.electricityforum.com/banmanpro/imgs/BA_EF_728x90_FamilyofProducts_0522_v2.gif"
            link="https://aemc.com/"
          />
          <Training />
          <News />
          <Jobbank />
        </div>
      </>
    );
  }
  return (
    <>
      <Social />
      <div className={styles.partOneContainer}>
        <Advertisement
          imgURL="https://www.electricityforum.com/banmanpro/imgs/BA_EF_728x90_FamilyofProducts_0522_v2.gif"
          link="https://aemc.com/"
        />
        <Row justify="space-between" className={styles.partOneCore}>
          <Col span={4}>
            <Training />
          </Col>
          <Col span={10}>
            <News />
          </Col>
          <Col span={6}>
            <Jobbank />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
