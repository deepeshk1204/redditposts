import axios from 'axios';

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
