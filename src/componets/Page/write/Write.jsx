import React from "react";
import "./write.css";
function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeform">
        <div className="writeformgroups">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeformgroups">
            <textarea placeholder="Tell your Story.." id=""  className="writeInput writetext"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
