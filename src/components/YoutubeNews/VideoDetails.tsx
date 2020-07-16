import React from "react";
import ImageBackgroundGIF from '../image/imageGIFBackGroundNews.gif';
import './style/video.css';
interface Iprops{
  video:any
}
class VideoDetail extends React.Component <Iprops,any>{
  
  render(){
    var video:any =this.props.video;
    const VideoDetail1 = (video:any) => {
      if (!video) {
        return <div style={{fontSize:'20px'}}>
           <p>
           Covid-19 is a global epidemic, together we build a healthy lifestyle, abide by the laws to protect individual and community health.
           <br/>
           Therefore, it is necessary to equip necessary knowledge on Covid-19 by searching for knowledge for themselves.
           <br/>
           Please enter keywords to search for information.
           </p>
           <img src={ImageBackgroundGIF} alt="covid" className="img-thumbnail" width="90%"/>
        </div>
      }
      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen  title="Video player" width="100%" height="550px"/>
      </div>
      <div className="ui segment">
        <p className="ui header-video-details">{video.snippet.title}</p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
    };
     return(
      <div>
        {VideoDetail1(video)}
      </div>
     )
  }
}

export default VideoDetail;
