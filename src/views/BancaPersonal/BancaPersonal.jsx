import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows, faChartLine,faHandHolding, faClock } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

const BancaPersonal = () => {
    return (
        <div className="home banca">
            <Header />
            <div className="home-content banca-content">
                <div className="login-register">
                    <Login />
                </div>         
            </div>

            <div className="banca-body bancaPersonal-body">
                <div className="service-title">
                    <p className="personal-title">¿Qué es Banca Personal?</p>
                    <p className="personal-description">Banca Personal es un servicio de alto valor para clientes que necesitan asesoramiento personalizado</p>
                </div>

                <div className="service-cards">
                    <div className="service-card">
                        <div className="service-card-img"><FontAwesomeIcon icon={faPeopleArrows} /></div>
                        <div className="service-card-description">
                            Un gestor personal siempre a su disposición.
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-img"><FontAwesomeIcon icon={faChartLine} /></div>
                        <div className="service-card-description">
                            Asesoramiento y planificación financiera.
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-img"><FontAwesomeIcon icon={faHandHolding} /></div>
                        <div className="service-card-description">
                            Productos y servicios adaptados a sus necesidades.
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-img"><FontAwesomeIcon icon={faClock} /></div>
                        <div className="service-card-description">
                            Información clara y transparente, las 24 horas.
                        </div>
                    </div>
                </div>

                <div className="service-circles">
                    <div className="service-circle">
                        <div className="service-circle-img connect"></div>
                        <div className="service-circle-content">
                            <div className="service-circle-title">
                                Bankia Gestión Experta Online
                            </div>
                            <div className="service-circle-description">
                                La vida nos ofrece múltiples posibilidades para disfrutar de ella y solo nos pide a cambio tiempo. Por eso, lanzamos Bankia Gestión Experta Online, un servicio de gestión de carteras con acceso a los mejores fondos de inversión.
                            </div>
                            <div className="service-circle-button">Saber más</div>
                        </div>
                    </div>
                    <div className="service-circle">
                        <div className="service-circle-img grandma"></div>
                        <div className="service-circle-content">
                            <div className="service-circle-title">
                                Cada Plan Vive* marca una generación, elige el tuyo y planifica tu jubilación
                            </div>
                            <div className="service-circle-description">
                                Los Planes Vive, ajustan el riesgo de la cartera en la que están invertidos a medida que se acercan la fecha de la jubilación.
                            </div>
                            <div className="service-circle-button">Saber más</div>
                        </div>
                    </div>
                    <div className="service-circle">
                        <div className="service-circle-img client"></div>
                        <div className="service-circle-content">
                            <div className="service-circle-title">
                                Ventajas de ser cliente
                            </div>
                            <div className="service-circle-description">
                                <p>En Bankia Banca Personal, el cliente ocupa el lugar más destacado, es el protagonista y la esencia de nuestro trabajo diario.</p>
                                <p>Como cliente de Banca Personal de Bankia tendrá a su disposición a un equipo preparado para seleccionar las mejores oportunidades en cada momento y acercarle las alternativas más interesantes para sus inversiones.</p>
                            </div>
                            <div className="service-circle-button">Saber más</div>
                        </div>
                    </div>
                    <div className="service-circle">
                        <div className="service-circle-img investment"></div>
                        <div className="service-circle-content">
                            <div className="service-circle-title">
                                Asesoramiento personalizado
                            </div>
                            <div className="service-circle-description">
                                Porque cada uno de nuestros clientes requiere soluciones específicas para su situación y necesidades, además del máximo rigor y exigencia en el seguimiento de sus inversiones.
                            </div>
                            <div className="service-circle-button">Saber más</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BancaPersonal;