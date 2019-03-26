import React, { PureComponent } from 'react'
import { Router, Link } from 'react-router-dom';
import './header.scss';


class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.path = window.location.pathname;
    }
    render() {
        return (
            <div className='header'>
                <div className='title'>
                <a href='/'>Reddit</a>
                {/* <Link to='/'>Reddit</Link> */}
                </div>
            </div>
        );
    }
}

export default Header;