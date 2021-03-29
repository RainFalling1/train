import axios from 'axios';

export const getAll = async () =>{
    return await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&per_page=10`,{
        headers: {
            'x-ratelimit-limit': 60,
        },
    }).catch((error) =>{
        alert(JSON.stringify(error))
    });
}

export const getMoreByUrl = async (type,num) =>{
    return await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&page=${num}&per_page=10`);
}

