import { Fragment } from "react";

import "./index.scss"

const BlogPage = () => {
  return (
    <Fragment>
      <section id="post-blog">
        <img className="blog-main-img" src="/blog-background.png" alt="main-img" />
        <div className="container-843">
          <div className="post-user">
            <img src="/public/user-icon.svg" alt="user-img" />
            <div className="user-infos">
              <h4>Andrew Jonson</h4>
              <p>Posted on 27th January 2022</p>
            </div>
          </div>
          <h3>Step-by-step guide to choosing great font pairs</h3>
          <h5>Startup (#business, #screen, #life)</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogPage;
