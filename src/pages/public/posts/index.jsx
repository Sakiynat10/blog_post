import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import request from "../../../service/request";
import PostCard from "../../../components/post-card";

const PostPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const params = { search };
        const {
          data: { data },
        } = await request("post", { params });
        setData(data);
        console.log(data);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
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
        </div>
      </section>
    </Fragment>
  );
};

export default PostPage;
