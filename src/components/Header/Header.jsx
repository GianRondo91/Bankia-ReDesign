import React from 'react';

import MenuToggle from '../MenuToggle/MenuToggle';

const Header = () => {
    return(
        <div className="header-home">
            <div className="home-header-logo"></div>
            <div className="home-header-toggle">
                <MenuToggle/>
            </div>
        </div>
    );
};

export default Header;