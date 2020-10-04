import axios from 'axios'

async function fetchData(url) {
    const tempToken = 'eyJhbGciOiJIUzI1NiJ9.eyJmcmllbmRzIjpbXSwiZnJpZW5kUmVxdWVzdHMiOltdLCJzZW50RnJpZW5kUmVxdWVzdHMiOltdLCJfaWQiOiI1ZjU2M2Y3MWU4ZjIxNDAwMTdlMzM3MTkiLCJuYW1lIjoiQWxpY2UiLCJlbWFpbCI6ImFsaWNlQGFsaWNlLmFsaWNlIiwicGFzc3dvcmQiOiIkMmEkMTAkeVM0aTFxSEM5UmlBbGlQVlhWR0V5ZXhkSjZiSWtxNE9ZMjJxMnZVZ2FPTkJBOGJTbkNjV1ciLCJjcmVhdGVkQXQiOiIyMDIwLTA5LTA3VDE0OjEwOjU3LjAyOVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA5LTA3VDE0OjEwOjU3LjAyOVoiLCJfX3YiOjB9.1GxWBZu4h1hyL9D4bsGThWfNdJROv6sK1vclpS4S-O0';
    const config = {
        method: 'get',
        url,
        headers: {
            Authorization: 'Bearer ' + tempToken,
            'Content-Type': 'application/json',
        },
    };
    let response;
    try {
        response = await axios(config);
    } catch (err) {
        response = err.response;
    }
    return response;
}

export async function userExists(userID) {
    const url = `https://cool-odin-book.herokuapp.com/users/${userID}`;
    const data = await fetchData(url);
    return (data.status === 200);
}
export async function fetchUserData(userID) {
    const url = `https://cool-odin-book.herokuapp.com/users/${userID}`;
    const data = await fetchData(url);
    return data.data;
}
export async function fetchUserPosts(userID) {
    const url = `https://cool-odin-book.herokuapp.com/users/${userID}/posts`;
    const data = await fetchData(url);
    return data.data;
}