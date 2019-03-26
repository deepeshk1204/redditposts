import React, { Component } from 'react'
import './post.css'

import { connect } from 'react-redux';
import * as actions from '../actions';

class Post extends Component {

    constructor(props){
        super(props);
        console.log(props)
    }

    render() {
        const {postdata} = this.props.location.state
        const thumbnail =  postdata.secure_media != null ? postdata.secure_media.oembed ? postdata.secure_media.oembed.thumbnail_url : '' : ''
        const url = postdata.preview.images[0].source.url.toString().replace(/&amp;/g, "&")
        console.log(thumbnail)
        console.log(url)
        return (
            <div className='post'>
                {postdata.title}
                <img src={thumbnail|| url} width='100%' height='100%'></img>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { }
}


export default connect(mapStateToProps,actions)(Post);