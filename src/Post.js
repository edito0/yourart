import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
    
  const like = document.querySelectorAll('.like');
  console.log(like);
    
    like.forEach(e => {
     e.addEventListener('click',()=>{
       e.style.color = "skyblue";
     })
  });

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar"  style={{hieght:'50px', width:'50px'}}/>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()} </p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p> 
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option like">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p><a href="https://mail.google.com/mail/u/1/"  target="_blank">Share</a></p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
