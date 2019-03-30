import React, { Component } from 'react'
import Item from './item.js'
import {getData, subredditList} from '../api';
import './list.scss'

import { connect } from 'react-redux';
import * as actions from '../actions';
class List extends Component {

    constructor(props) {
        super(props)
        this.postList = []
        this.searchReddit = this.searchReddit.bind(this);
        this.fetchReddit = this.fetchReddit.bind(this);
        this.getPreviousSearch = this.getPreviousSearch.bind(this);
        this.setRef = React.createRef();
        this.inputRef = null
        this.state = {
            searchHistory: [],
            subredditList: ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats', 'images', 'photoshopbattles', 'hmmm', 'all', 'aww'],
            message: 'fetching data...'
        }
    }


    async getRedditList(){
        const data  = await subredditList();
        console.log(data.data.data.children.forEach(e=> console.log(e.data.display_name)))

    }



     getData = async(searchterm) => {
        const data = await getData(searchterm);
        try {
            const posts = data.data.data.children;
            this.props.savePost({
                key: searchterm,
                data:posts
            })
            if(posts && posts.length === 0){
                this.setState({message:'No data'})
                return
            }
            this.creatPost(posts);
        } catch (error) {
            this.setState({message:'Error fetching data......'})
            console.log(error)
        }
    }

    creatPost(posts) {
        posts.filter(post => post.data.preview !== undefined && post.data.preview.images.length > 0);
        posts.forEach((post, i) => {
            if (post.data.preview) {
                const thumbnail =  post.data.secure_media != null ? post.data.secure_media.oembed ? post.data.secure_media.oembed.thumbnail_url : '' : ''
                // const url = post.data.preview.images[0].source.url.toString().replace(/&amp;/g, "&")
                // const previewImage = this.createImagePreview(post.data.preview.images)
                this.postList.push(<Item data={post.data} title={post.data.title} url={thumbnail || post.data.thumbnail} key={post.data.id}></Item>);
            }
            else {
                this.postList.push(<div key={post.data.id}></div>);
            }
        });
        this.setState({ data: posts });
    }

    createImagePreview(urlList) {
        const previewList = []
        urlList.forEach((url, i) => {
            const updatedURL = url.source.url.replace(/&amp;/g, "&");
            previewList.push(updatedURL);
        })
        return previewList;
    }

    componentDidMount() {
        // this.getRedditList()
        // console.log(this.props.post[this.props.post.length -1]['key'])
        const existingPost = this.props.post[this.props.post.length -1]
        if(this.props.post[this.props.post.length -1]){
            this.creatPost(existingPost.data)
        } else {
            this.getData('cats')
        }

        // this.getData('cats')
    }

    searchReddit(){
        this.postList = []
        // console.log('postDataStore',this.props.post.find((val) => val.key == this.setRef.current.value))
        const existingPost = this.props.post.find((val) => val.key == this.setRef.current.value);
        if(existingPost){
            this.creatPost(existingPost.data)
        } else {
            this.getData(this.setRef.current.value)
            this.props.saveSearch(this.setRef.current.value)
        }
    }

    fetchReddit(event){
        this.postList = []
        // console.log('postDataStore',this.props.post.find((val) => val.key == this.setRef.current.value))
        const existingPost = this.props.post.find((val) => val.key == event.target.value);
        if(existingPost){
            this.creatPost(existingPost.data)
        } else {
            this.getData(event.target.value)
            this.props.saveSearch(event.target.value)
        }
    }

    getPreviousSearch(){
        console.log('getPreviousSearch')
        const searchTerm = this.props.search;
        this.setState({searchHistory: searchTerm});
    }


    createDropdown(){
            const options = this.state.subredditList.map((e,i) => {
                    return(<option key={e} value={e}>{e}</option>)
            })
            return(
                <div className='subredditDropdown'>
                    <select  onChange={this.fetchReddit}>{options}</select>
                </div>

            );
    }

    render() {
        let createList;
        if(this.postList.length){
            createList = this.postList
        } else {
            createList = <div className='nodata'>{this.state.message}</div>
        }

        return(<div className='postlist'>
                {/* {this.state.searchHistory} */}
                {/* <Search searchReddit={this.searchReddit} {...this.props} setRef={this.setRef}></Search> */}
                {/* <div className='searchContainer'>
                    <input type='text' ref={this.setRef} />
                    <button onClick={this.searchReddit}>Search</button>
                    <button onClick={this.getPreviousSearch}>history</button>
                </div> */}
                {this.createDropdown()}
                {createList}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        post: state.post
    }
}

// const Search = props => <div>
//     <input type='text' ref={props.setRef} />
//     <button onClick={props.searchReddit}>Search</button>
// </div>

export default connect(mapStateToProps,actions)(List);