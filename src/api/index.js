import axios from 'axios';
import * as data from './data'
import _ from 'lodash';

export const getData = async (searchterm) => {
        try {
                return await axios.get(`https://www.reddit.com/r/${searchterm}.json?limit=100&count=10`);
        } catch (error) {
                console.log(error)
        }

}

export const subredditList = async () => {
               return await  axios.get('https://www.reddit.com/reddits.json?limit=100&count=10')
}


export const getTeams = async () => {
        return await axios.get('https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json')
}

export const getTableData = (perpage) => {
        const dataChunk = _.chunk(data.default, 10)
        console.log(dataChunk)
        return {
                data:data.default,
                pages: parseInt(data.default.length/ perpage)
        }
}

export const getdataByPage = (pageno) => {
        const dataChunk = _.chunk(data.default, 10)
        return {
                data:dataChunk[pageno],
                currentPage: pageno,
                totalPage: dataChunk.length,
        }
}

export const searchdata = (searchterm) => {
        const dd = data.default
        const filterChunk = dd.filter(val => val.name.includes(searchterm.toUpperCase()))
        const dataChunk = _.chunk(filterChunk,10)
        debugger
        return {
                data:dataChunk[0],
                currentPage: 1,
                totalPage: dataChunk.length,
        }
}