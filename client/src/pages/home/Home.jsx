import React from 'react';
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";

function Home() {
    return (
        <>
            <Topbar></Topbar>
            <div className="homeContainer">
                <Sidebar></Sidebar>
                <Feed></Feed>
            </div>
        </>
    )
}

export default Home
