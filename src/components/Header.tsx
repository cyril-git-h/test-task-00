import React from 'react';
import defaultLogo from '../images/defaultLogo.png';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

function Header() {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            description: 'lorem impust ptiondescription text description',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            description: 'rf5rtflorem5ft5escription lorem',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            description: 'text description text description text description',
        },
    ];

    return (
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
                    <button onClick={() => alert('ok')} className="header__auth-button">Login</button>
                </div>
                <div className="header__slider">
                    <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} lazyLoad={true} />
                </div>
            </div>
        </div>
    );
}

export default Header;