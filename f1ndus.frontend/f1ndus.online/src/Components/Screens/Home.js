import React from 'react';
import Sidebar from "../Parts/Sidebar";
import Login from "../Parts/Login";
import Signup from "../Parts/Signup";
const Home = () => {
    return(
        <>
        <body>
            <Sidebar/>
            <Signup/>
            <Login/>
        </body>
        </>
    );
};
export default Home;