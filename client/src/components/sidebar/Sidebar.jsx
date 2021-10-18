import "./sidebar.css"

import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarList">
                <div className="sidebarListItem">Item</div>
                <div className="sidebarListItem">Item</div>
                <div className="sidebarListItem">Item</div>
            </div>
            <div className="sidebarHr"></div>
            <div className="sidebarFriendList">
                <div className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt=""></img>
                    Freund
                </div>
                <div className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt=""></img>
                    Freund
                </div>
                <div className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt=""></img>
                    Freund
                </div>
            </div>
        </div>
    )
}

export default Sidebar
