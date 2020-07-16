import React from 'react';
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './style/video.css';
interface IState {
    term: any;
}
interface IProps {
    handleFormSubmit: any
}
class SearchBar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            term: "covid"
        }
    }
    handleChange = (event: any) => {
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = (event: any) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    render() {
        return (
            <>
                <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        
                        <div className='field'>
                            <p>
                                <FontAwesomeIcon icon={faSearch} size="2x"/>
                            </p>
                            <div>
                            <TextField id="outlined-basic" name='video-search' className="input-search" variant="outlined" onChange={this.handleChange}/>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
export default SearchBar;