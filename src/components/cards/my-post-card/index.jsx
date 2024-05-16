import { Fragment } from "react";
import PropTypes from 'prop-types';
import { Button } from "antd";
import getImageURL from "../../../utils/get-image-url";



const MyPostCard = ({ description , category , photo, _id, editPost, title }) => {
  return (
    <Fragment>
      <div className="posts-content">
        <img src={getImageURL(photo)} alt="" />
        <div className="posts-infos">
          <div className="post-title" style={{display:"flex" , justifyContent:"space-between" , marginBottom:"20px" , alignItems:"center"}}>
          <h6 style={{marginBottom:"0"}}>{category.name}</h6>
          <div className="change-btns" style={{display:"flex", alignItems:"center", padding:"0" , gap:"10px"}}>
            <Button onClick={() => editPost(_id)}>Edit</Button>
            <Button>Delete</Button>
          </div>
          </div>
          <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

MyPostCard.propTypes = {
  category:PropTypes.object , 
  description:PropTypes.string ,
  photo:PropTypes.object,
}

export default MyPostCard;
