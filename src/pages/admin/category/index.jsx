import { Fragment } from "react";

import "./index.scss";

const AdminCategoryPage = () => {
  return (
    <Fragment>
      <section id="category-blog">
        <div className="blog-content">
          <div className="container">
            <h1>Business</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <h4>
              Blog <span>></span> Business
            </h4>
          </div>
        </div>
        <div className="category-contents container">
          <input type="text" placeholder="Searching..." />
          <div className="posts-content">
            <img src="/public/blog-1.png" alt="posts-image" />
            <div className="posts-infos">
              <h6>Startup</h6>
              <h3>Design tips for designers that cover everything you need</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="posts-content">
            <img src="/blog-1.png" alt="posts-image" />
            <div className="posts-infos">
              <h6>Startup</h6>
              <h3>Design tips for designers that cover everything you need</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="posts-content">
            <img src="/blog-1.png" alt="posts-image" />
            <div className="posts-infos">
              <h6>Startup</h6>
              <h3>Design tips for designers that cover everything you need</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="posts-content">
            <img src="/blog-1.png" alt="posts-image" />
            <div className="posts-infos">
              <h6>Startup</h6>
              <h3>Design tips for designers that cover everything you need</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AdminCategoryPage;
