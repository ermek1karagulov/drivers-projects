import React from "react";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div
        style={{ margin: "1rem", display: "flex", justifyContent: "center" }}
      >
        <h2 style={{ fontSize: "2.3rem" }}>Войти</h2>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: "90%" }}
        >
          <Form.Item
            name="Номер телефона"
            rules={[{ required: true, message: "Напишите номер телефона" }]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Номер телефона"
            />
          </Form.Item>
          <Form.Item
            name="Пароль"
            rules={[{ required: true, message: "Напишите пароль" }]}
            style={{ marginBottom: "0" }}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item style={{ margin: "0px" }}>
            <a className="login-form-forgot" href="">
              Забыли пароль
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              <span>У вас уже есть аккаунт?</span>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
