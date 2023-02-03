import './SinglePost.css';
import {useLocation } from 'react-router';
import {Link} from "react-router-dom";
import { useState, useEffect , useContext} from 'react';
import { Context } from '../../context/Context';


function SinglePost() {
  const PF = "http://localhost:3000/images/"
  const location = useLocation();  
  const postID = location.pathname.replace('/post/','');  
  const [post, setPost] = useState(false);
  const {user} = useContext(Context); 

  useEffect(()=>{
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postID}`);
      const data = await response.json();
      setPost(data);
    }
    fetchPost();
  },[]);

  const deletePost = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postID}`, {
        method:"DELETE",
        mode:'cors',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username":user.username}),
        cache: 'default',
      });
      response.ok && window.location.replace('/');

    } catch (err) {
      console.log(err);
    };    
  }
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (<img className='singlePostImage' src={PF + post.photo} alt="post_image" />)}
        <h1 className='singlePostTitle'>
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={deletePost}></i>
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