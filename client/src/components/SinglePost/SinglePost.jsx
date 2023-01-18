import './SinglePost.css';
import React from 'react';

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className='singlePostImage' src="/src/assets/seagull.jpg" alt="post_image" />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Maciej</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singePostDescription'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam voluptate nihil sit voluptatum inventore delectus 
          sunt incidunt, recusandae pariatur ipsum consectetur suscipit,
           non iste perspiciatis debitis nam nostrum voluptatibus nobis 
           autem minus modi ut amet repellat? Suscipit culpa excepturi ipsa
            nam sit veritatis, nihil exercitationem eaque fugit id. Saepe 
            voluptates molestias, quos rerum quis harum alias error assumenda 
            dignissimos praesentium?
        </p>
      </div>
    </div>
  )
}

export default SinglePost