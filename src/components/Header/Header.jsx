import React from 'react';

import MenuToggle from '../MenuToggle/MenuToggle';

const Header = () => {
    return(
        <div className="header-home">
            <a href="/" className="home-header-logo"> </a>
            <div className="home-header-toggle">
                <MenuToggle/>
            </div>
        </div>
    );
};

export default Header;