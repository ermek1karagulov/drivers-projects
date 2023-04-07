import React from "react";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./RegistPage.css";

const RegistPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div
        style={{ margin: "1rem", display: "flex", justifyContent: "center" }}
      >
        <h2 style={{ fontSize: "2.3rem" }}>Регистрация</h2>
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
            rules={[{ required: true, message: "Напишите номер телефона!" }]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Номер телефона"
            />
          </Form.Item>
          <Form.Item
            name="Пароль"
            rules={[{ required: true, message: "Придумайте пароль" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item style={{ margin: "0px" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Зарегестрироваться
            </Button>
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "0.5rem",
              marginTop: "0.7rem",
            }}
          >
            <span style={{ color: "#a39b9b" }}>У вас уже есть аккаунт?</span>
            <a href="/login">Войти</a>
          </div>
        </Form>
      </div>
    </>
  );
};

export default RegistPage;
