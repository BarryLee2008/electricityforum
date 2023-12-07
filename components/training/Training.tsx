import { NextPage } from "next";
import { Courseboard, Register } from "components/index";
import { Skeleton, List, Button } from "antd";
import { useEffect, useState } from "react";
import { ThunderboltOutlined } from "@ant-design/icons";
import request from "service/fetch";
import style from "./training.module.css";
export const Training: NextPage = () => {
  interface dataType {
    title: string;
  }
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<dataType[] | []>([
    {
      title: "aaa",
    },
    {
      title: "bbb",
    },
  ]);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const handleRegisterOpen = (isOpen: boolean) => {
    setOpenRegister(isOpen);
  };
  useEffect(() => {
    request.get("/api/admin/getcatagory").then((data) => {
      let newData: dataType[] | [] = [];

      data.data?.data?.forEach((item: any, key: number) => {
        newData[key] = {
          title: item?.title,
        };
      });
      setData(newData);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <List
        header={
          <div className={style.header}>Live Electrical Training Schedule</div>
        }
        dataSource={data}
        footer={
          <>
            <Button
              type="primary"
              onClick={() => {
                setOpenRegister(true);
              }}
            >
              Sign up Today
            </Button>{" "}
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
              }}
            >
              Read More
            </Button>
          </>
        }
        renderItem={(item: dataType) => (
          <List.Item>
            <Skeleton loading={loading} avatar active>
              <List.Item.Meta
                key={item.title}
                avatar={<ThunderboltOutlined className={style.icon} />}
                title={item.title}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      <Courseboard open={open} handleOpen={handleOpen} />
      <Register open={openRegister} handleOpen={handleRegisterOpen} />
    </>
  );
};
