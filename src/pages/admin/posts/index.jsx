import { Fragment } from "react";

import "./index.scss"

const AdminPostPage = () => {
  return (
    <Fragment>
      <section id="all-posts">
        <div className="container">
          <div className="all-post-contents">
            <input type="text" placeholder="Searching..." />
            <h1>All posts</h1>
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdminPostPage;
