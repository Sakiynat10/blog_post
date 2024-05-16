import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import { Input, Form, Button, Row, Col, Upload } from "antd";
import request from "../../../service/request";
import LoadingAccount from "../../../components/loading/loading-account";
import { BASE } from "../../../constants";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await request("auth/me");
        setUser(data);
        form.setFieldsValue(data);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [form]);
  return (
    <Fragment>
      {loading ? (
        <LoadingAccount />
      ) : (
        <section id="account">
          <div className="container">
            <Row>
              <Col span={8}>
                {user?.photo ? <img width={"100%"} style={{borderRadius:"20px"}} src={BASE + "upload/" + user.photo}/>  : <input type="file" />}
              </Col>
              <Col span={16}>
                <h1>Account</h1>
                <Form
                form={form}
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
      )}
    </Fragment>
  );
};

export default AccountPage;
