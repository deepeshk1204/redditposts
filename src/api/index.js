
import * as data from './data'
import _ from 'lodash';

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