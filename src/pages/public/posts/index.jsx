import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import request from "../../../service/request";
import PostCard from "../../../components/post-card";
import { Pagination } from "antd";
import { LIMIT } from "../../../constants";
// import LoadingPosts from "../../../components/loading/loading-posts";

const PostPage = () => {

  const getPage = (page) => {
    localStorage.setItem("page" , page)
    setPage(JSON.parse(localStorage.getItem("page")))
  };


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(JSON.parse(localStorage.getItem("page")));

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const params = { search, page , limit: LIMIT };
        console.log(page)
        const {
          data: {
            data,
            pagination: { total },
          },
        } = await request("post", { params });
        setData(data);
        setTotal(total);
        console.log(data);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, [search, page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(data);


  return (
    <Fragment>
      <section id="all-posts">
        <div className="container">
          <div className="all-post-contents">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Searching..."
            />
            <h1>All posts</h1>
            {data?.map((post, i) => (
              <PostCard key={i} {...post} />
            ))}
          </div>
          <Pagination total={total} pageSize={LIMIT} onChange={getPage} />
        </div>
      </section>
    </Fragment>
  );
};

export default PostPage;
