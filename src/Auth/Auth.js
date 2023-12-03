import React, { useState } from "react";
import { Modal, Button, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "../css/Auth.module.css"

const AuthModal = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <Button type="primary" className={styles.loginbutton} onClick={showModal}>
        Вхід
      </Button>
      <Modal
        title="Вхід"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Відмінити
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            {loading ? <Spin indicator={antIcon} /> : "Увійти"}
          </Button>,
        ]}
      >
        <Form name="basic" initialValues={{ remember: true }}>
          <Form.Item
            label="Логін"
            name="username"
            rules={[
              { required: true, message: "Будь ласка, введіть свій логін!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              { required: true, message: "Будь ласка, введіть свій пароль!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AuthModal;
