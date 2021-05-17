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
                    <a href="/banca-personal"><NavItem>Cuentas y tarjetas</NavItem></a>
                    <a href="/banca-privada"><NavItem>Ahorro e Inversión</NavItem></a>
                    <a href="/"><NavItem>Financiación</NavItem></a>
                    <a href="/"><NavItem>Seguros</NavItem></a>
                    <a href="/"><NavItem>Ofertas Especiales</NavItem></a>
                </Nav>
            </div>
        </div>
    );
};

export default MenuToggle;