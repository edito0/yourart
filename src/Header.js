import React from "react";
import "./Header.css";
import logo from './Untitled-1.png'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <div className="header">

        <div className="header__left">
          <img src={logo} alt="" />
          <h1>YourArt</h1>
        </div>

        <div className="header__middle">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search' />
        </div>


        <div className="header__right">
          <a href="#" target="_blank"><i className="fa-solid fa-house"></i></a>
          <a target="_blank" href="https://artist-talk.herokuapp.com/"><i className="fa-solid fa-message"></i></a>
          <a href="https://edito0.github.io/Photo-editor/" target="_blank"><i class="fa-solid fa-pen-to-square"></i></a>

          {/* <div className="header__info">
            <Avatar src={user.photoURL} style={{ height: '30px', width: '30px' }} />
            <h4> {user.displayName}</h4>
          </div> */}
        </div>

      </div>
      {/* <div className="line"></div> */}

      <div className="intro-bg">
        <div className="intro">

          <Avatar src={user.photoURL} style={{ height: '120px', width: '120px',border:'9px solid #FFA1A1',zIndex:'5' }} />

          <div className="intro-name">
            <div>
            <h4> {user.displayName}</h4>
            <p>An enthusiastic Artist</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
