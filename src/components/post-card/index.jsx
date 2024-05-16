import { Fragment } from "react";
import getImageURL from "../../utils/get-image-url";

import PropTypes from 'prop-types';

const PostCard = ({category , description , photo}) => {
  console.log(photo?._id , "photo");
  return (
    <Fragment>
      <div className="posts-content">
        <img src={getImageURL(photo)} alt="" />
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

PostCard.propTypes = {
  category:PropTypes.object , 
  description:PropTypes.string ,
  photo:PropTypes.object,
}

export default PostCard;

