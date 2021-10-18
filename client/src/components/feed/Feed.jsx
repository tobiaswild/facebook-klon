import React from 'react'
import "./feed.css"
import Post from "../../components/post/Post"

function Feed() {
    return (
        <div className="feed">
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )
}

export default Feed
