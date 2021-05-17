import React,{ useState } from 'react';
import { Nav, NavItem } from 'reactstrap';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuToggle = () => {

    let [state, setState] = useState({
        isOpen: false
    });

    const toggleMenu = () => {
        setState({ isOpen: !state.isOpen});
    };

    return(
        <div className="menuToggle">
            <div className="menuToggle-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={classNames("sidebar", {"is-open": state.isOpen})}>
                <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="close-icon"/>
                <Nav>
                    <NavItem>Particulares</NavItem>
                    <NavItem>Cuentas y tarjetas</NavItem>
                    <NavItem>Ahorro e Inversión</NavItem>
                    <NavItem>Financiación</NavItem>
                    <NavItem>Seguros</NavItem>
                    <NavItem>Ofertas Especiales</NavItem>
                </Nav>
            </div>
        </div>
    );
};

export default MenuToggle;