import "./Settings.css";
import "../../components/Sidebar/Sidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useContext } from "react";
import {Context} from '../../context/Context';
import { useRef, useState} from "react";
function Settings() {
    const PF = 'http://localhost:3000/images/';

    const {user, dispatch} = useContext(Context);
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch("UPDATE_START");

        const updatedUser = {
            userId:user._id,
            username: usernameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;   
            try {
                const res = await fetch('http://localhost:3000/upload', {
                    method:"POST",                    
                    body:data
                });
            }   catch (err) {
                console.log(err);
            }         
        }

        try {
            const response = await fetch(`http://localhost:3000/users/${user._id}`, {
                method:"PUT",
                mode:'cors',
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(updatedUser),
                cache: 'default'
            });         
            const data = await response.json();
            response.ok && dispatch({type:"UPDATE_SUCCESS", payload: data});
            usernameRef.current.value = '';
            emailRef.current.value = '';            
            passwordRef.current.value = '';
            response.ok && window.location.replace('/'); 
        } catch (err) {
            console.log(err)
            dispatch("UPDATE_FAILURE");
        }
    }

  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Acount</span>
                <span className="settingsDeleteTitle">Delete Your Acount</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label htmlFor="">Profile Picture</label>
                <div className="settingsProfilePicture">                    
                    {file ? <img src={URL.createObjectURL(file)}></img> : <img src={user.profilePic ? PF + user.profilePic : "/src/assets/sidebar_photo.jpg"}></img>}
                    
                    <label htmlFor="fileInput">
                        <i className="settingsProfileIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0])}}/>
                </div>
                <label>Username</label>
                <input type="text" ref={usernameRef}/>
                <label>Email</label>
                <input type="text" ref={emailRef}/>
                <label>Password</label>
                <input type="password" ref={passwordRef}/>
                <button className="settingsButton" type="submit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings