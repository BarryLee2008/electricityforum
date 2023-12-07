import { NextPage } from "next";
import style from "./register.module.css";
import { Form, Input, Button, Spin, message } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import request from "service/fetch";
interface propsType {
  handleOpen: (open: boolean) => void;
  open: boolean;
}
export const Register: NextPage<propsType> = ({ handleOpen, open }) => {
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
    const data: any = {};
    data.name = values?.middlename
      ? `${values.firstname} ${values.middlename} ${values.lastname}`
      : `${values.firstname} ${values.lastname}`;
    data.email = values.email;
    data.password = values.password;
    console.log(data);
    setLoad(true);

    try {
      const response = await request.post("/api/user/register", data);
      setLoad(false);
      handleClose();
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

    console.log(values);
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
            label="email"
            name="email"
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
          <Form.Item
            label="confirm"
            name="confirm"
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input placeholder="please type your firstname" />
          </Form.Item>
          <Form.Item label="Middle Name" name="middlename">
            <Input placeholder="please type your middle name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input placeholder="please type your lastname" />
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
