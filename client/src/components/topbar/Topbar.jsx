import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Facebook Klon</span>
            </div>,
            <div className="topbarCenter">
                <Search className="searchIcon"></Search>
                <input className="searchInput" placeholder="Search for friends, posts or videos"></input>
            </div>,
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person></Person>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat></Chat>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications></Notifications>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarImg" src="assets/person/1.jpeg"></div>
            </div>
        </div>
    )
}

export default Topbar
