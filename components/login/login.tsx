import { NextPage } from "next";
import style from "./login.module.css";
import { Form, Input, Button, Spin, message } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import request from "service/fetch";
interface propsType {
  handleOpen: (open: boolean) => void;
  open: boolean;
  handleToken: (token: string) => void;
}
export const Login: NextPage<propsType> = ({
  handleOpen,
  open,
  handleToken,
}) => {
  const [load, setLoad] = useState(false);
  const [form] = Form.useForm();
  const handleClose = () => {
    handleOpen(false);
    form.resetFields();
  };
  let containerClassName = ``;
  open
    ? (containerClassName = `${style.container} ${style.show}`)
    : (containerClassName = `${style.container} ${style.disappear}`);

  const handleFinish = async (values: any) => {
    setLoad(true);

    try {
      const response = await request.post("/api/user/login", values);
      setLoad(false);
      handleClose();
      console.log(response.data);
      window.localStorage.setItem("token", response.data?.data?.token);
      handleToken(response.data?.data?.token);
      message.success(
        response.data?.message ? response.data?.message : "Successfully"
      );
    } catch (error: any) {
      message.error(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : "Unkown Error",
        3,
        () => {
          setLoad(false);
        }
      );
    }

    //console.log(values);
  };
  const handleFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };
  const handleRest = () => {
    form.resetFields();
  };
  return (
    <div className={containerClassName}>
      <div className={style.loginArea}>
        <div className={style.close} onClick={handleClose}>
          <CloseCircleOutlined />
        </div>
        <div className={style.logo}>
          <img
            className={style.img}
            src="https://electricityforum.info/images/ef-logo_short.png"
            alt="logo1"
          />
        </div>
        <Form
          form={form}
          name="formLogin"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          className={style.form}
          onFinish={handleFinish}
          onFinishFailed={handleFailed}
        >
          <Form.Item
            label="username"
            name="username"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input type="text" placeholder="Please input your username!" />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Please input your password" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button
              type="primary"
              style={{ marginRight: "20px", width: "80px" }}
              htmlType="submit"
            >
              Submit
            </Button>
            <Button
              type="primary"
              style={{ width: "80px" }}
              onClick={handleRest}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={style.spin} style={{ display: load ? "block" : "none" }}>
        <Spin className={style.spinComponent} />
      </div>
    </div>
  );
};
