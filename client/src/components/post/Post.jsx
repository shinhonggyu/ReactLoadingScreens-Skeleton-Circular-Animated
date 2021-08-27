import './post.css';

const Post = ({ video }) => {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img className="postImg" src={video.img} alt="" />
        <span className="postDuration">{video.duration}</span>
      </div>
      <div className="postInfoContainer">
        <img className="postAvatar" src={video.channel.avatar} alt="" />
        <div className="postInfo">
          <span className="postTitle">{video.titoe}</span>
          <span className="postChannel">{video.channel.name}</span>
          <span className="postDetail">
            {video.views} views • {video.data}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
