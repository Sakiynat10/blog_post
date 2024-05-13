import { Fragment } from "react";

const PostCard = ({category , description}) => {
  return (
    <Fragment>
      <div className="posts-content">
        <img src="/blog-1.png" alt="posts-image" />
        <div className="posts-infos">
          <h6>{category.name}</h6>
          <h3>{category.description}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PostCard;
