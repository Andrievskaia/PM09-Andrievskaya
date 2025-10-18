import React from 'react';
import './Footer.css';



function Footer() {
  return (
    <div className="Contacts">
        <h1>Контакты</h1>
        <div className='Contacts-container'>
            <div className='Contacts-address'>
                <h1>Адрес кофейни:</h1>
                <h2>г. Калуга </h2>
                <h2>ул. Автозаводская, 15</h2>
            </div>
            <div className='Contacts-address'>
                <h1>график работы:</h1>
                <h2>пн, вт, ср, чт, пт: 8:00 - 19:00</h2>
                <h2>сб, вс: 8:00 - 16:00</h2>
            </div>
            <div className='Contacts-address'>
                <h1>Связаться с нами:</h1>
                <h2>тел: 8-956-123-00-05</h2>
                <h2>email: KofeiKnigi@mail.ru</h2>
            </div>
        </div>
    </div>
  );
}


export default Footer;