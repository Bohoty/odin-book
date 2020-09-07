import React from 'react';
import { useEffect, useState } from 'react';
import PostsList from '../../posts/PostsList';
import { fetchUserPosts } from './userProfileDataActions';
export default function UserPosts(props) {
    const userID = props.userID;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const setNewPosts = async () => {
            const newPosts = await fetchUserPosts(userID);
            setPosts(newPosts);
        }
        setNewPosts();
    }, [userID]);
    return (posts.length ?
        <div>
            <PostsList posts={posts} />
        </div>
        : <h3>This user does not have any posts yet :( </h3>
    )
}

