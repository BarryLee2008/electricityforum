import { NextPage } from "next";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import {
  UserOutlined,
  UserSwitchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export const DropdownUser: NextPage = () => {
  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "0",
      icon: <UserSwitchOutlined />,
    },
    {
      label: "Log out",
      key: "1",
      icon: <DeleteOutlined />,
      onClick: () => {
        window.localStorage.removeItem("token");
        window.location.reload();
      },
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <UserOutlined />
    </Dropdown>
  );
};
