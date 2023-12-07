import { NextPage } from "next";
import { Menu, Col, Row, Divider } from "antd";
import type { MenuProps } from "antd";
import style from "./navigation.module.css";
export const Navigation: NextPage = () => {
  const items: MenuProps["items"] = [
    {
      label: "CHANNELS",
      key: "0",
      children: [
        {
          label: (
            <a href="https://www.electricityforum.com/td">
              Transmission & Distribution
            </a>
          ),
          key: "TD",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/iep">
              Industrial Electrical Power{" "}
            </a>
          ),
          key: "IEP",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/electricity-fundamentals">
              Electricity Fundamentals Explained
            </a>
          ),
          key: "EFE",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/renewable-energy">
              Renewable Energy Channel
            </a>
          ),
          key: "REC",
        },
      ],
    },
    {
      label: <a href="https://www.electricityforum.com/news">NEWS</a>,
      key: "1",
    },
    {
      label: (
        <a href="https://www.electricityforum.com/electrical-training/electrical-courses">
          Electrical Training
        </a>
      ),
      key: "2",
    },
    {
      label: "BUYER`S GUIDE",
      key: "3",
      children: [
        {
          label: (
            <a href="https://www.electricityforum.com/td/buyers-guide">
              Transmission&Distribution
            </a>
          ),
          key: "TD",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/iep/buyers-guide">
              Industrial Electrical Power
            </a>
          ),
          key: "INP",
        },
      ],
    },
    {
      label: "EF PARTNER MEDIA",
      key: "4",
      children: [
        {
          label: (
            <a href="https://www.electricityforum.com/videos">
              Electrical Videos
            </a>
          ),
          key: "EV",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/showcases">
              Product Showcase
            </a>
          ),
          key: "PS",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/literature">
              Catalogs/Literature
            </a>
          ),
          key: "CL",
        },
      ],
    },
    {
      label: (
        <a href="https://www.electricityforum.com/electrical-jobs/">
          ELECTRICAL JOBS
        </a>
      ),
      key: "5",
    },
    {
      label: "WEBINAR WATCH",
      key: "6",
      children: [
        {
          label: <a href="https://www.webinarwatch.com/">Webinar Calendar</a>,
          key: "WC",
        },
        {
          label: (
            <a href="https://www.electricityforum.com/webinars">
              Webinar Library
            </a>
          ),
          key: "WL",
        },
      ],
    },
  ];
  return (
    <div className={style.container}>
      <Row>
        <Col span={6} className={style.bottomLine}></Col>
        <Col span={16}>
          <Menu
            selectedKeys={["0"]}
            items={items}
            mode="horizontal"
            style={{ fontWeight: "bolder" }}
          />
        </Col>
        <Col span={2} className={style.bottomLine}></Col>
      </Row>
    </div>
  );
};
