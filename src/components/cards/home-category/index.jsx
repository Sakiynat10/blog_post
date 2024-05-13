import { Fragment } from "react";

const HomeCategory = ({name , description}) => {
  return (
    <Fragment>
      <div className="category-cards">
        <img src="/category-icon-1.svg" alt="logo" />
        <div className="category-titles">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCategory;
