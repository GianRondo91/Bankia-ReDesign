import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Login from '../../components/Login/Login';

const Home = () => {
    return(
        <div className="home">
            <div className="home-header">
                <div className="home-header-logo"></div>
                <div className="home-header-toggle">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="home-content">
                <div className="login-register">
                    <Login/>
                </div>
            </div>
        </div>
    );
};

export default Home;