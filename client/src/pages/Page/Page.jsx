import "./Page.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

function Page() {
  return (
    <div className="page">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Page