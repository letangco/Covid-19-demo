import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../../api/YoutubeNews/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import './style/video.css';
class PageYoutubeNews extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    async componentDidMount()
    {
        let  response: any = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 3,
                // key: 'AIzaSyBqqdiP7gxBFVf69_gmlJKlKv2RtBTCV1A',
                key:'AIzaSyB0HSHarXU2fpDlotRLsX3XxfbTumEFtLE',
                q: "covid"
            }
        })
        this.setState({
            videos: response.data.items,
        })
    }
    handleSubmit = async (termFromSearchBar: any) => {
        let response: any = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 3,
                // key: 'AIzaSyBqqdiP7gxBFVf69_gmlJKlKv2RtBTCV1A',
                key:'AIzaSyB0HSHarXU2fpDlotRLsX3XxfbTumEFtLE',
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items,
        })
    };
    handleVideoSelect = (video: any) => {
        this.setState({ selectedVideo: video })
    }
    render() {
        return (
            <div className='container-fluid page-youtube-News'>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title-page-news">
                    <p>
                        <FontAwesomeIcon icon={faPhotoVideo} /> COVID-19 NEWS
                    </p>
                    <SearchBar handleFormSubmit={this.handleSubmit} />
                </div>
                
                <div className=''>
                    <div className="">
                        
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="video-details">
                            <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                        </div>
                        
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="video-items">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageYoutubeNews;