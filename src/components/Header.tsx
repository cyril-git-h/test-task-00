import React, { useState } from 'react';
import defaultLogo from '../images/defaultLogo.png';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import Modal from './Modal';
import LoginForm from './LoginForm';
import SendRequest from './SendRequest';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import thumb1 from '../images/thumb1.jpg';
import thumb2 from '../images/thumb2.jpg';
import thumb3 from '../images/thumb3.jpg';

function Header(props: any) {

    const images = [
        {
            original: slider1,
            thumbnail: thumb1,
            description: 'lorem impust ptiondescription text description',
        },
        {
            original: slider2,
            thumbnail: thumb2,
            description: 'rf5rtflorem5ft5escription lorem',
        },
        {
            original: slider3,
            thumbnail: thumb3,
            description: 'text description text description text description',
        },
    ];

    let { loginActive, setLoginActive, requested, setRequested } = props
    return (
        <>
            <Modal modalActive={loginActive} setModalActive={setLoginActive}>
                {
                    (props:any) => (
                        <LoginForm {...props} />
                    )
                }
            </Modal>
            <Modal modalActive={requested} setModalActive={setRequested}>
                {
                    (props:any) => (
                        <SendRequest {...props} />
                    )
                }
            </Modal>
            <div className="header">
                <div className="header__top">
                    <div className="logo"><a href="#"><img src={defaultLogo} alt="logo" /></a></div>
                    <nav className="menu">
                        <ul className="menu__inner">
                            <li><a className="menu__link" href="#">link 1</a></li>
                            <li><a className="menu__link" href="#">link 2</a></li>
                            <li><a className="menu__link" href="#">link 3</a></li>
                            <li><a className="menu__link" href="#">link 4</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__main">
                    <div className="header__auth">
                        <h1 className="header__auth-title">Auth</h1>
                        {localStorage.getItem('id') !== '1' && <button onClick={() => setLoginActive(true)} className="header__auth-button">Login</button>}
                    </div>
                    <div className="header__slider">
                        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} lazyLoad={true} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;