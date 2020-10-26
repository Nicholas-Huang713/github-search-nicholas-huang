import axios from 'axios';

export const getUser = (userName) => {
    axios.get(`https://api.github.com/users/${userName}`, {
        auth: {
         username: 'nicholas-huang713',
         password: 'b730dd7e9ea9e57dc0d0ca79654767848de66f13'
        },
    })
    .then((res) => {
        console.log(res.data);
        res.json();
    })
    .catch(err => console.log(err));
}

export const getUserFollowing = (userName, pageIndex, pageSize) => {
    axios(`https://api.github.com/users/${userName}/following?page=${pageIndex}&per_page=${pageSize}`, {
        auth: {
            username: 'nicholas-huang713',
            password: 'b730dd7e9ea9e57dc0d0ca79654767848de66f13'
        },
    })
    .then((res) => {
        console.log(res.data)
        res.json();
    })
    .catch(err => console.log(err));
}