import React, { Component } from 'react'
import {getdataByPage, searchdata} from '../api'
import './table.scss'

import { connect } from 'react-redux';
import * as actions from '../actions';
class Table extends Component {

    constructor(props){
        super(props)
        this.state = {
            tabledata:[],
            columns: [],
            totalpage: 0
        }
        this.selected= [];
        this.setRef = React.createRef();
        this.pageClicked = this.pageClicked.bind(this);
        this.searchData = this.searchData.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }


    updateSelected = (row) => {

        console.log(row)
        this.selected.push(row)
        this.props.saveSelected(this.selected)
        // this.setState({selected: this.state.selected})
        // this.setState({selected: this.state.selected.push(row)})
    }

    async componentDidMount(){
        const data = getdataByPage(1)
        this.setState({tabledata: data.data})
        this.setState({columns: Object.keys(data.data[0])})
        this.setState({totalpage: data.totalPage})
    }

    pageClicked = (event) => {
        const data = getdataByPage(event.target.value)
        this.setState({tabledata: data.data})
    }

    searchData = () => {
        const data  = searchdata(this.setRef.current.value)
        this.setState({tabledata: data.data})
    }



    createModal  =() => {
        return (
            <div id="popup1" className="overlay">
            <div className="popup">
                <h2>Here i am</h2>
                <a className="close" href="#">&times;</a>
                <div className="content">
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                </div>
            </div>
        </div>)
        }

    render() {
        const dataColumns = this.state.columns;
        const dataRows = this.state.tabledata || [];
        const paginator = []
        const selected = this.selected.length;
        for(var i =0; i< this.state.totalpage; i++){
            paginator.push(<option key={i} className='page'>{i+1}</option>)
        }

        var searchbar = (
                <div className='searchBar'>
                    <input type='text' ref={this.setRef} />
                    <button onClick={this.searchData}>Search</button>
                </div>
        )
        var tableHeaders = (<thead>
            <tr>
              {dataColumns.map(function(column) {
                return <th key={column}>{column}</th>; })}
            </tr>
        </thead>);

        var tableBody = dataRows.map((row,i) => {
        return (
          <tr key={i}>
          <td>
          <input type='checkbox' onChange={()=>this.updateSelected(row)}/>
          </td>
            {dataColumns.map(function(column) {
              return <td> {row[column]}</td>; })}
          </tr>); });

        var  multiselectSection = (selected) => {
            if(selected > 1){
                return (<div>multi operation</div>)
            } else {
                return ''
            }
        }

        return (
            <div className='tableContainer'>
            {searchbar}
            {multiselectSection}
            <table href="#popup1">
            {tableHeaders}
            <tbody>
                {tableBody}
            </tbody>
            </table>
            <select onChange={this.pageClicked} className='pager'>
                {paginator}
            </select>
            {this.createModal()}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected,
    }
}


export default connect(mapStateToProps,actions)(Table);