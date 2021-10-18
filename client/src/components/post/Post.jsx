import "./post.css"
import { MoreVert } from "@material-ui/icons"

import React from 'react'

function Post() {
    return (
        <div className="post">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/9.jpeg" alt="profilePicture"></img>
                    <span className="postUserName">ZDI Entwickler</span>
                    <span className="postDate">10min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert></MoreVert>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"></span>
                <img className="postImg" src="/assets/post/7.jpeg" alt="postPicture"></img>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt="likePicture"></img>
                    <img className="likeIcon" src="/assets/heart.png" alt="heartPicture"></img>
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Kommentare</span>
                </div>
            </div>
        </div>
    )
}

export default Post
