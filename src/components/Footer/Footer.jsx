import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-columns">
                <ul className="footer-column">
                    <p className="footer-column-title">SOBRE BANKIA</p>
                    <li>Promociones y campañas</li>
                    <li>Oficina Ágil</li>
                    <li>Bankia Estudios</li>
                    <li>Blog</li>
                    <li>Coronavirus</li>
                </ul>
                <ul className="footer-column">
                    <p className="footer-column-title">HERRAMIENTAS</p>
                    <li>Bankademia</li>
                    <li>Pago de recibos y tributos</li>
                    <li>Comparador de fondos</li>
                    <li>App Bankia</li>
                    <li>Simulador de planes</li>
                </ul>
                <ul className="footer-column">
                    <p className="footer-column-title">PRODUCTOS</p>
                    <div className="footer-double-column">
                        <div className="column-left">
                            <li>Hipoteca Sin Comisiones</li>
                            <li>Préstamos personales</li>
                            <li>Invertir en bolsa</li>
                            <li>Cuentas</li>
                            <li>Tarjeta de crédito</li>
                            <li>Depósitos</li>
                        </div>
                        <div className="column-right">
                            <li>Planes de pensiones</li>
                            <li>Seguro de coche</li>
                            <li>Seguro de vida</li>
                            <li>Seguro de hogar</li>
                            <li>Seguro de salud</li>
                            <li>Informes periódicos de fondos y planes</li>
                        </div>
                    </div>
                </ul>
                <ul className="footer-column">
                    <p className="footer-column-title">SÍGUENOS</p>
                    <div className="column-icons">
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                    </div>
                </ul>
            </div>
            <div className="footer-lagacy">
                <p>Información legal de este portal y websiteCiberseguridadPrivacidadPolítica de cookiesTarifasTablón de anuncios BankiaComisiones, Tipos de Interés y de cambioAccesibilidadMiFID</p>
                <p>PSD2Servicio de traslado de cuentasCódigo de buenas prácticas</p>
                <p>© CaixaBank, S.A. 2021.</p>
            </div>
        </div>
    );
};

export default Footer;