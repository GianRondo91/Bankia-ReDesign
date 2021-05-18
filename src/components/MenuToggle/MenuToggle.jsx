import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuToggle = () => {

    let [state, setState] = useState({
        isOpen: false
    });

    const toggleMenu = () => {
        setState({ isOpen: !state.isOpen });
    };

    return (
        <div className="menuToggle">
            <div className="menuToggle-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={classNames("sidebar", { "is-open": state.isOpen })}>
                <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="close-icon" />
                <Nav>
                    <a href="/"><NavItem>Particulares</NavItem></a>
                    <a href="/banca-personal"><NavItem>Banca Personal</NavItem></a>
                    <a href="/banca-privada"><NavItem>Banca Privada</NavItem></a>
                    <a href="/"><NavItem>Empresas</NavItem></a>
                    <a href="/"><NavItem>Pymes y Autónomos</NavItem></a>
                    <a href="/"><NavItem>Agro</NavItem></a>
                </Nav>
            </div>
        </div>
    );
};

export default MenuToggle;