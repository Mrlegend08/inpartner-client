import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import { CiLogin } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <header className='site-header'>
                <div className='container'>
                    <div className='site-header__wrapper'>
                        <div className='site-header__start'>
                            <Link className='site-header__logo' to='/'>
                                <img
                                    className='site-header__logo--img'
                                    src='./assets/images/logo.svg'
                                    width={95}
                                    height={40}
                                    alt='Inpartner logo'
                                />
                            </Link>

                            <form className='site-header__search--form'>
                                <input
                                    className='site-header__search--input'
                                    type='search'
                                    name='search'
                                    aria-label='Qidiruv maydoni matn kiriting'
                                    placeholder='Qidirish'
                                />
                            </form>
                        </div>

                        <div className='site-header__end'>
                            <nav className='site-header__nav'>
                                <ul className='site-header__nav--list'>
                                    <li className='site-header__nav--item'>
                                        <NavLink
                                            className='site-header__nav--link'
                                            to='/elonlar'>
                                            E'lonlar
                                        </NavLink>
                                    </li>
                                    <li className='site-header__nav--item'>
                                        <NavLink
                                            className='site-header__nav--link'
                                            to='/chat'>
                                            Chat
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>

                            <Link
                                className='site-header__hiring--link'
                                to='/elon-berish'>
                                E'lon berish
                            </Link>

                            <div className='site-header__auth d-flex align-items-center'>
                                <div className='site-header__auth-avatar--box'>
                                    <img
                                        className='site-header__auth-avatar--img'
                                        src='./assets/icons/user.svg'
                                        width={40}
                                        height={40}
                                        alt='User img'
                                    />
                                </div>
                                <img
                                    className='site-header__auth-arrow--img'
                                    src='./assets/icons/arrow-bottom.svg'
                                    width={10}
                                    height={7}
                                    alt='Arrow icon'
                                />

                                <ul className='site-header__auth--menu'>
                                    <li className='site-header__auth--menu-item'>
                                        <Link
                                            className='site-header__auth--menu-link'
                                            to='/login'>
                                            Kirish
                                            <CiLogin className='ms-2' />
                                        </Link>
                                    </li>
                                    <li className='site-header__auth--menu-item'>
                                        <Link
                                            className='site-header__auth--menu-link'
                                            to='/register'>
                                            Ro'yxatdan o'tish
                                            <FiEdit className='ms-2' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
