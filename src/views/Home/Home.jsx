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
            </div>
            <div className="home-body">
                <div className="atm home-body-container equals-design">
                    <div className="panel-left">
                        <div className="atm-img home-body-img"></div>
                    </div>
                    <div className="panel-right">
                        <div className="panel-right-content">
                            <div className="atm-title">Ahora, dispones de más de 13.000 cajeros</div>
                            <div className="atm-description">Desde el 27 de marzo, tienes disponibles nuevas funcionalidades para CaixaBank y Bankia</div>
                            <div className="atm-button">Saber más</div>
                        </div>
                    </div>
                </div>
                <p className="payments-title">Únete a nosotros</p>
                <div className="payments home-body-container">
                    <div className="payment-bizum">
                        <div className="payment-bizum-img home-body-img"></div>
                        <div className="payment-content">
                            <div className="payment-center">
                                <div className="payment-title">Bizum para todos nuestros clientes</div>
                                <div className="payment-description">Envía y recibe dinero de tus amigos cómodamente, con sólo saber el número de móvil y del destinatario.</div>
                                <div className="payment-button">Me interesa</div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-mobile">
                        <div className="payment-mobile-img home-body-img"></div>
                        <div className="payment-content">
                            <div className="payment-center">
                                <div className="payment-title">Pago por móvil</div>
                                <div className="payment-description">Google Pay, Samsung Pay o Apple Pay: Tus tarjetas en el móvil para cualquier dispositivo.</div>
                                <div className="payment-button">Saber más</div>
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
                            <div className="promotion-title">Promociones y campañas</div>
                            <div className="promotion-description">Por ser cliente tendrás un buen servicio y grandes promociones. Puedes consultarlas desde aquí.</div>
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