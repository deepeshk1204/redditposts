import React, { Component } from 'react';
import Header from '../component/header';
import List from '../component/list';
import Post from '../component/post';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Router>
            <Switch>
             <Route   path="/post" component={Post} />
             <Route exact path="/" component={List} />
            </Switch>
          </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

export default connect(mapStateToProps,actions)(App);
