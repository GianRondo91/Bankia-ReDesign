import React from 'react';

import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

const Home = () => {
    return(
        <div className="home">
                <Header/>
            <div className="home-content">
                <div className="login-register">
                    <Login/>
                </div>
            </div>
        </div>
    );
};

export default Home;