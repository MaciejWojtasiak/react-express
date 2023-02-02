import "./Write.css";
import { useState } from "react";

function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const user = JSON.parse(localStorage.getItem('user'));
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const newPost = {
            username:user.username,
            title,
            desc
        }
        try {
            const response = await fetch('http://localhost:3000/posts/', {
                method:'POST',
                mode:'cors',
                headers: {
                  Accept: 'application.json',
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(newPost),
                cache: 'default'
            });   
             response.ok && window.location.replace('/');      
        } catch (err) {
            console.log(err)
        }
        
    }

  return (
    <div className="write">
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-regular fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>{setFile(e.target.value)}}/>
                <input type="text" placeholder="Title" id="titleInput" autoFocus={true} className="writeInput"  onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Write a post..." type="text" id="postInput" className="writeInput writeText"  onChange={(e)=>{setDesc(e.target.value)}}></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}

export default Write