import React from "react";
import "./post.css";
import { Link} from 'react-router-dom';

function Post({img}) {
  return (
    <div className="post">
      <img
        src={img}
        alt="imf"
        srcset=""
        className="postImg"
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="postTitle"><Link to='/post/123' className="link">Lorem ipsum dolor sit amet </Link></span>
        <span className="postDate">1hor ago</span>
      </div>
      <p className="postDiscription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem rem
        iusto aut expedita asperiores unde explicabo vero nulla accusamus, non
        laudantium id dolores placeat minima?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem rem
        iusto aut expedita asperiores unde explicabo vero nulla accusamus, non
        laudantium id dolores placeat minima?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem rem
        iusto aut expedita asperiores unde explicabo vero nulla accusamus, non
        laudantium id dolores placeat minima?
      </p>
    </div>
  );
}

export default Post;
