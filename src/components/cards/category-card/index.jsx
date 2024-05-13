import { Fragment } from "react";

const CategoryCard = ({name , description , user}) => {
  return (
    <Fragment>
        <div className="posts-content">
          <img src="/blog-2.png" alt="posts-image" />
          <div className="posts-infos">
            <h6>{name}</h6>
            <h3>{description}</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
    </Fragment>
  );
};

export default CategoryCard;
