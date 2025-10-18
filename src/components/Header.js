import React from 'react';
import './Header.css';
import logoUrl from '../images/logo.jpg'

const scrollIntoView = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
}

function Header({setPage, refs}) {
  return (
    <div className="Header">
        <ul>
            <li onClick={() => setPage('Main')}>Главная</li>
            <li onClick={() => {scrollIntoView(refs.Main.Menu)}}>Меню</li>
            <li onClick={() => {scrollIntoView(refs.Footer)}}>Контакты</li>
            <li onClick={() => setPage('BookTable')}>Забронировать</li>
            <li onClick={() => setPage('Blog')}>Блог</li>
            <li onClick={() => setPage('Busket')}>Корзина</li>
        </ul>
        <img className="header_logo" src = {logoUrl} alt="logo"></img>
    </div>
  );
}

export default Header;