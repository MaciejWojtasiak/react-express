import "./Write.css";

function Write() {
  return (
    <div className="write">
        <form className="writeForm" action="">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-regular fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" id="titleInput" autoFocus={true} className="writeInput"/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Write a post..." type="text" id="postInput" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write