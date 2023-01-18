import "./Post.css";

function Post() {
  return (
    <div className="post">
        <img className="postImg" src="/src/assets/seagull.jpg" alt="post_image" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Music</span>
                <span className="postCategory">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid iste eveniet quas. Quam accusantium, 
            temporibus dicta odio commodi esse aut, minus quis adipisci dolorem quos qui velit vel cumque.
        </p>
    </div>
  )
}

export default Post