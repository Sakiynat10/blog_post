import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import request from "../../../service/request";
import MyPostCard from "../../../components/cards/my-post-card";

const MyPostPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [pagination1, setPagination] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        setLoading(true);
        const params = { search };
        const {
          data: { data, pagination },
        } = await request("post", {params});
        setData(data);
        setPagination(pagination);
      } finally {
        setLoading(false);
      }
    };
    getMyPosts();
  }, [data, pagination1, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Fragment>
      <section id="my-post">
        <div className="container">
          <div className="posts-title">
            <h1>My posts</h1>
            <button>Add post</button>
          </div>
          <div className="all-post-contents">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Searching..."
            />
            {data?.map((post, i) => (
              <MyPostCard key={i} {...post} />
            ))}
            {/* <div className="posts-content">
              <img src="/blog-1.png" alt="posts-image" />
              <div className="posts-infos">
                <h6>Startup</h6>
                <h3>
                  Design tips for designers that cover everything you need
                </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="posts-content">
              <img src="/blog-1.png" alt="posts-image" />
              <div className="posts-infos">
                <h6>Startup</h6>
                <h3>
                  Design tips for designers that cover everything you need
                </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="posts-content">
              <img src="/blog-1.png" alt="posts-image" />
              <div className="posts-infos">
                <h6>Startup</h6>
                <h3>
                  Design tips for designers that cover everything you need
                </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="posts-content">
              <img src="/blog-1.png" alt="posts-image" />
              <div className="posts-infos">
                <h6>Startup</h6>
                <h3>
                  Design tips for designers that cover everything you need
                </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MyPostPage;
