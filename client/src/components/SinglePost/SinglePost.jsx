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
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const {user} = useContext(Context); 

  useEffect(()=>{
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postID}`);
      const data = await response.json();
      setPost(data);
      setTitle(data.title);
      setDesc(data.desc);
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
  const editPost = () => {
    setEdit(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/posts/${postID}`, {
      method:"PUT",
      mode:'cors',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({title:title,desc:desc, username:user.username}),
      cache: 'default'
    });
    console.log(response)    
    response.ok && window.location.reload();
    } catch (err) {
      console.log(err)
    }    
  }
  

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (<img className='singlePostImage' src={PF + post.photo} alt="post_image" />)}
        <h1 className='singlePostTitle'>
          {edit ? <input type="text" className="titleInput" value={title} onChange={e=>setTitle(e.target.value)}></input> : post.title}       
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={editPost}></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={deletePost}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <Link className="link" to={`/?user=${post.username}`}>{post.username}</Link></span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className='singePostDescription'>
          {edit ? <textarea type="text" className="descInput" value={desc} onChange={e=>setDesc(e.target.value)}></textarea> : post.desc}  
        </p>
        {edit && <button className='editBtn' type='submit' onClick={handleSubmit}>Edit</button>}
      </div>
    </div>
  )
}

export default SinglePost