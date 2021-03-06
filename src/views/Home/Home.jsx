import React from 'react';

import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return(
        <div className="home">
            <Header/>
            <div className="home-content">
                <div className="login-register">
                    <Login/>
                </div>
                <div className="home-selectors">
                    <div className="selector-left selector">
                        <div className="selector-img selector-images">
                            <div className="img"></div>
                        </div>
                        <div className="selector-content">
                            <div className="selector-content-center">
                                <div className="selector-title">
                                    Recomendador de tarjetas
                                </div>
                                <div className="selector-button">
                                    La mejor tarjeta para mi
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="selector-center selector">
                        <div className="selector-img selector-images">
                            <div className="img"></div>
                        </div>
                        <div className="selector-content">
                            <div className="selector-content-center">
                                <div className="selector-title">
                                    Simulador de Plan de Pensiones
                                </div>
                                <div className="selector-button">
                                    Me interesa
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="selector-right selector">
                        <div className="selector-img selector-images">
                            <div className="img"></div>
                        </div>
                        <div className="selector-content">
                            <div className="selector-content-center">
                                <div className="selector-title">
                                    Comparador de fondos
                                </div>
                                <div className="selector-button">
                                    Saber m??s
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-body">
                <div className="atm home-body-container equals-design">
                    <div className="panel-left">
                        <div className="atm-img home-body-img"></div>
                    </div>
                    <div className="panel-right">
                        <div className="panel-right-content">
                            <div className="atm-title">Ahora, dispones de m??s de 13.000 cajeros</div>
                            <div className="atm-description">Desde el 27 de marzo, tienes disponibles nuevas funcionalidades para CaixaBank y Bankia</div>
                            <div className="atm-button">Saber m??s</div>
                        </div>
                    </div>
                </div>
                <p className="payments-title">??nete a nosotros</p>
                <div className="payments home-body-container">
                    <div className="payment-bizum">
                        <div className="payment-bizum-img home-body-img"></div>
                        <div className="payment-content">
                            <div className="payment-center">
                                <div className="payment-title">Bizum para todos nuestros clientes</div>
                                <div className="payment-description">Env??a y recibe dinero de tus amigos c??modamente, con s??lo saber el n??mero de m??vil y del destinatario.</div>
                                <div className="payment-button">Me interesa</div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-mobile">
                        <div className="payment-mobile-img home-body-img"></div>
                        <div className="payment-content">
                            <div className="payment-center">
                                <div className="payment-title">Pago por m??vil</div>
                                <div className="payment-description">Google Pay, Samsung Pay o Apple Pay: Tus tarjetas en el m??vil para cualquier dispositivo.</div>
                                <div className="payment-button">Saber m??s</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="promotions home-body-container equals-design">
                    <div className="panel-left">
                        <div className="promotion-img home-body-img"></div>
                    </div>
                    <div className="panel-right">
                        <div className="panel-right-content">
                            <div className="promotion-title">Promociones y campa??as</div>
                            <div className="promotion-description">Por ser cliente tendr??s un buen servicio y grandes promociones. Puedes consultarlas desde aqu??.</div>
                            <div className="promotion-button">Ver todas las promociones</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;