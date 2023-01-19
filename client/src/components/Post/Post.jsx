import "./Post.css";
import {Link} from "react-router-dom";

function Post({post}) {
  return (
    <div className="post">
      {post.photo && (<img className="postImg" src={post.photo} alt="post_image" />)}        
        <div className="postInfo">
            <div className="postCategories">
              {post.categories.map((category)=> {
                <span className="postCategory">{post.category}</span>
              })}              
            </div>            
            <span className="postTitle"><Link className="link" to={`/post/${post._id}`}>{post.title}</Link></span>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">
            {post.desc}
        </p>
    </div>
  )
}

export default Post