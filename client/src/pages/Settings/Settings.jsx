import "./Settings.css";
import "../../components/Sidebar/Sidebar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Acount</span>
                <span className="settingsDeleteTitle">Delete Your Acount</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="/src/assets/sidebar_photo.jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsProfileIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Maciej"/>
                <label>Email</label>
                <input type="text" placeholder="maciek@mail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsButton">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings