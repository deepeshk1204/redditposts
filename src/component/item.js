import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './item.scss';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Item extends Component {

    constructor(props){
        super(props)
        this.state = {
            iframe: null
        }
        this.path = '/post/'+ this.props.data.id
    }

    render() {
        return (

            <div className='itemContainer'>
            <Link to={{ pathname: '/post/'+this.props.data.id, state: { postdata: this.props.data} }}>
                <img alt='itemImage' className='itemImage' src={this.props.url}></img>
                <div className='itemtitle'>
                    <h4>{this.props.title}</h4>
                    <div className='lowerContaier'>
                     <div>
                     <img height='25px' src='https://buzzhostingservices.com/images/instagram-comment-icon-1.png'></img>
                     <p>{this.props.data.num_comments}</p>
                     </div>
                     <div>&#9650; {this.props.data.ups}</div>
                     <div>&#9660; {this.props.data.downs}</div>

                    </div>
                </div>
            </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post,
        search: state.search,
    }
}


export default connect(mapStateToProps,actions)(Item);