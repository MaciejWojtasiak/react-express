import './SinglePost.css';
import {useLocation } from 'react-router';
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';

function SinglePost() {
  const location = useLocation();  
  const postID = location.pathname.replace('/post/','');
  
  const [post, setPost] = useState(false);

  useEffect(()=>{
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postID}`);
      const data = await response.json();
      setPost(data);
    }
    fetchPost();
  },[])

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.image && (<img className='singlePostImage' src={post.image} alt="post_image" />)}
        <h1 className='singlePostTitle'>
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <Link className="link" to={`/?user=${post.username}`}>{post.username}</Link></span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className='singePostDescription'>
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost