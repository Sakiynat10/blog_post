import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import request from "../../../service/request";
import MyPostCard from "../../../components/cards/my-post-card";
import { Form, Button, Modal, Pagination, Input, Select } from "antd";
import { LIMIT } from "../../../constants";
import getImageURL from "../../../utils/get-image-url";
// import LoadingPosts from "../../../components/loading/loading-posts";

const MyPostPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();
  const [btnLoading, setBtnLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState(null);
  const [categoryId, setCategoryId] = useState(null)

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        setLoading(true);
        const params = { search, page, limit: LIMIT };
        const {
          data: {
            data,
            pagination: { total },
          },
        } = await request("post/user", { params });
        setTotal(total);
        setData(data);
        const {
          data: { data: categoryData },
        } = await request("category", { params: { limit: 100 } });
        console.log(categoryData);
        setCategory(categoryData);
      } finally {
        setLoading(false);
      }
    };
    getMyPosts();
  }, [search, page,callback]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getPage = (page) => {
    setPage(page);
  };

  const refetch = () => {
    setCallback(!callback);
  };

  const submit = async () => {
    setIsOpen(false);
    try {
      setBtnLoading(true);
      const values = await form.validateFields();
      console.log(values);
      const post = { ...values, photo: photo._id, category: categoryId };
      console.log(post);
      await request.post("post", post);
      refetch()
      setIsOpen(false);
      refetch();
    } finally {
      setBtnLoading(false);
    }
  };

  const handleImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      setBtnLoading(true);
      const { data } = await request.post("upload", formData);
      setPhoto(data);
    } finally {
      setBtnLoading(false);
    }
  };

  const closedModal = () => {
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
    form.resetFields();
    setPhoto(null);
    setCategoryId(null)
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setCategoryId(value)
  };

  const deletePhoto = async () => {
    try {
      setBtnLoading(true);
      await request.delete(`upload/${photo._id}`);
      setPhoto(null);
    } finally {
      setBtnLoading(false);
    }
  };

  const editPost = (id) =>{
    console.log(id);
  }

  return (
    <Fragment>
      <section id="my-post">
        <div className="container">
          <div className="posts-title">
            <h1>My posts</h1>
            <Button type="submit" onClick={showModal}>
              Add post
            </Button>
          </div>
          <div className="all-post-contents">
            <Modal
              title="My Post"
              open={isOpen}
              onOk={submit}
              onCancel={closedModal}
              confirmLoading={btnLoading}
            >
              <Form
                form={form}
                className="form"
                name="my-posts"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                style={{
                  maxWidth: 600,
                }}
                autoComplete="off"
              >
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: "Please fill category!",
                    },
                  ]}
                >
                  {/* <Select
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "title",
                        label: "Environment",
                      },
                    ]}
                  /> */}
                  <Select onChange={handleChange}>
                    {category?.map(el =>
                      <Select.Option key={el._id} value={el._id}>{el.name}</Select.Option>
                    )}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please fill subtitle!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please fill description!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {photo ? (
                  <div style={{ position: "relative" }}>
                    {" "}
                    <button
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "transparent",
                      }}
                      onClick={deletePhoto}
                      className="upload-img"
                    >
                      <img style={{ padding: "5px" }} src="/close.svg" alt="" />
                    </button>{" "}
                    <img width={"100%"} src={getImageURL(photo)} alt="" />
                  </div>
                ) : (
                  <input
                    disabled={btnLoading}
                    type="file"
                    onChange={handleImage}
                  />
                )}
                {/* <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    {...register("title")}
                    className="form-control"
                  />
                  <p style={{ color: "red" }}>{errors.title?.message}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="subtitle">Subtitle</label>
                  <input
                    type="text"
                    id="subtitle"
                    {...register("subtitle")}
                    name="subtitle"
                    className="form-control"
                  />
                  <p style={{ color: "red" }}>{errors.title?.message}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    {...register("description")}
                    name="description"
                    className="form-control"
                  />
                  <p style={{ color: "red" }}>{errors.title?.message}</p>
                </div> */}
              </Form>
            </Modal>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Searching..."
            />
            {data?.map((post, i) => (
              <MyPostCard key={i} {...post} editPost={editPost} />
            ))}
          </div>
          <Pagination total={total} pageSize={LIMIT} onChange={getPage} />
        </div>
      </section>
    </Fragment>
  );
};

export default MyPostPage;
