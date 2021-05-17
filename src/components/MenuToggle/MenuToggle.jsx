import React,{ useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuToggle = (props) => {
    return(
        <div className="menuToggle">
            <div className="menuToggle-icon">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
};

export default MenuToggle;