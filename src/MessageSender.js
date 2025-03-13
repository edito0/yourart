import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./MessageSender.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./fireabse";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messagesender">
      <div className="messagesender__top">
        {/* <Avatar src={user.photoURL} /> */}
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messagesender__input1"
            placeholder={`What's on your mind, ${user.displayName} ?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className='messagesender__input2'
            placeholder="Image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className='messagesender__bottom'>

        <div className='messagesender__bottom-option'>
          <i class="fa-solid fa-video" style={{ color: 'red' }}></i>
          <h3>Video/Gif</h3>
        </div>

        <div className='messagesender__bottom-option'>
          <i class="fa-solid fa-image" style={{ color: 'green' }}></i>
          <h3>Photos</h3>
        </div>

        <div className='messagesender__bottom-option'>
          <i class="fa-solid fa-face-grin-wide" style={{ color: 'rgb(241, 241, 131)' }}></i>
          <h3>Felling/Activity</h3>
        </div>

      </div>
    </div>
  );
}

export default MessageSender;
