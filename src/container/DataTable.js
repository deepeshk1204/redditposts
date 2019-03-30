import React, { Component } from 'react';
import Table from '../component/table';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class DataTable extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
             <Route  path="/" component={Table} />
            </Switch>
          </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps,actions)(DataTable);
