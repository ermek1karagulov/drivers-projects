import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

const Navbar: React.FC = () => (
  <div style={{ marginBottom: "2rem" }}>
    <Breadcrumb
      style={{ width: "100%" }}
      items={[
        {
          href: "/",
          title: <HomeOutlined />,
        },
        {
          href: "/addDriver",
          title: (
            <>
              <UserOutlined />
              <span>Настройки</span>
            </>
          ),
        },
        {
          href: "/registr",
          title: "Зарегистрироваться",
        },
      ]}
    />
  </div>
);

export default Navbar;
