import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faUserLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

const BancaPrivate = () => {
    return (
        <div className="home banca">
            <Header />
            <div className="home-content banca-content bancaPrivate-content">
                <div className="login-register">
                    <Login />
                </div>
            </div>
            <div className="banca-body bancaPersonal-body bancaPrivate-body">
                <div className="bancaPrivate-containers">
                    <div className="bancaPrivate-container-title">
                        Una Banca Privada 100 % personal, profesional y a medida
                    </div>
                    <div className="containers">
                        <div className="container">
                            <div className="container-img">
                                <FontAwesomeIcon icon={faSmile} />
                            </div>
                            <div className="container-description">
                                En Bankia Banca Privada, usted es el activo más esencial y nuestro principal objetivo es su satisfacción al 100 %.
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-img">
                                <FontAwesomeIcon icon={faUserLock} />
                            </div>
                            <div className="container-description">
                                Le ofrecemos un servicio completamente a su medida, basado en los principios de integridad, compromiso, profesionalidad, transparencia y confidencialidad.
                            </div>
                        </div>
                        <div className="container">
                            <div className="container-img">
                                <FontAwesomeIcon icon={faUserPlus} />
                            </div>
                            <div className="container-description">
                                Ponemos a su disposición una amplia gama de productos, tanto propios como de otras entidades, porque cada cliente necesita una solución distinta.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-circles">
                    <div className="service-circle">
                        <div className="service-circle-img connect"></div>
                        <div className="service-circle-content">
                            <div className="service-circle-title">
                                Conversaciones con tu Gestor
                            </div>
                            <div className="service-circle-description">
                                Ampliamos los canales de comunicación entre el cliente y su gestor. Para ello, ahora puede contar con la nueva funcionalidad de “Conversaciones con tu Gestor”.
                            </div>
                            <div className="service-circle-button">Saber más</div>
                        </div>
                    </div>

                    <div className="service-circle">
                        <div className="service-circle-img connect"></div>
                        <div className="service-circle-content">
                            <div className="service-circle-title">
                                Nueva Bankia Banca Privada
                            </div>
                            <div className="service-circle-description">
                                Descubra la nueva forma de pertenecer a Bankia Banca Privada. Ofrecemos confidencialidad, cercanía, transparencia, profesionalidad y compromiso en la gestión del patrimonio de nuestros clientes.
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

export default BancaPrivate;