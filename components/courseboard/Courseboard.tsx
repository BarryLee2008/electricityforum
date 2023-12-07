import { NextPage } from "next";
import style from "./courseboard.module.css";
import { Card, Row, Col, Spin, message } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import request from "service/fetch";
import { imgUrls, links } from "./config";
import Link from "next/link";
import { error } from "console";
interface propsType {
  open: boolean;
  handleOpen: (isOpen: boolean) => void;
}

interface dataType {
  title: string;
  description: string;
  type: string;
  url: string;
}

export const Courseboard: NextPage<propsType> = ({ open, handleOpen }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<dataType[] | []>([]);
  let containerClassName = open
    ? `${style.container} ${style.show}`
    : `${style.container} ${style.disappear}`;
  useEffect(() => {
    request
      .get("/api/admin/getcourse")
      .then((data) => {
        //console.log(data.data?.data);
        let newData: dataType[] = [];
        data.data?.data.forEach((item: any, key: number) => {
          newData.push({
            title: item?.title,
            description: item?.description,
            type: item?.type,
            url: imgUrls[key],
          });
        });
        setData(newData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        message.error("/api/admin/getcourse");
      });
  }, []);
  return (
    <div className={containerClassName}>
      <div className={style.courseBoard}>
        <div
          className={style.close}
          onClick={() => {
            handleOpen(false);
          }}
        >
          <CloseCircleOutlined />
        </div>
        <div className={style.logo}>
          <span>
            <img
              className={style.img}
              src="https://electricityforum.info/images/ef-logo_short.png"
              alt="logo1"
            />
          </span>
          <span style={{ fontSize: "3rem" }}>
            Electrical Training That Works!
          </span>
        </div>
        <div className={style.board}>
          <Row gutter={[16, 16]} className={style.board}>
            {loading ? (
              <Spin />
            ) : (
              data.map((item, key) => (
                <Col
                  key={key}
                  lg={6}
                  md={12}
                  onClick={() => {
                    window.open(links[key], "_blank");
                  }}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={item.url}
                        style={{ height: "200px" }}
                      />
                    }
                    style={{ height: "400px" }}
                  >
                    <Card.Meta
                      style={{ textOverflow: "ellipsis" }}
                      title={item.title}
                      description={
                        item.description.length <= 200
                          ? item.description
                          : `${item.description.slice(0, 200)}...`
                      }
                    />
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};
