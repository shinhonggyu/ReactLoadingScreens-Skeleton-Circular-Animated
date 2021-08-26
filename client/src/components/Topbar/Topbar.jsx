import './topbar.css';
import {
  Mic,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img src="https://i.ibb.co/KDtnJVY/logo.png" alt="" className="logo" />
        <span className="logoText">LamaTube</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>
      <div className="topRight">
        <VideoCall className="topIcon" />
        <Apps className="topIcon" />
        <Notifications className="topIcon" />
        <img
          className="topImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHmoZMKGtMCmxQjSStsw7Y19l_IauV_3-6g&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Topbar;
