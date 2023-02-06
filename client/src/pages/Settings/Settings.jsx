import "./Settings.css";
import "../../components/Sidebar/Sidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useContext } from "react";
import {Context} from '../../context/Context';
import { useRef } from "react";
function Settings() {

    const {user, dispatch} = useContext(Context);
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch("UPDATE_START");

        const updatedUser = {
            userId:user._id,
            username: usernameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
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
                    {user.profilePic ? <img src={user.profilePic} alt="" /> : <img src="/src/assets/sidebar_photo.jpg" alt="" />}
                    
                    <label htmlFor="fileInput">
                        <i className="settingsProfileIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
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