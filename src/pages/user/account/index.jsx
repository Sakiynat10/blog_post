import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import { Input, Form, Button, Row, Col, Upload } from "antd";
import request from "../../../service/request";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await request("auth/me");
        console.log(data);
      } finally {
        setLoading(false);
      }
    }
    getUser()
  } , []);
  return (
    <Fragment>
      <section id="account">
        <div className="container">
          <Row>
            <Col span={8}>
              <Upload></Upload>
            </Col>
            <Col span={16}>
              <h1>Account</h1>
              <Form
                name="account"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                autoComplete="off"
                className="form-groups"
              >
                <Form.Item
                  style={{ display: "flex", flexDirection: "column" }}
                  label="Firstname"
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please fill!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Lastname"
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please fill!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Button>Save</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  );
};

export default AccountPage;
