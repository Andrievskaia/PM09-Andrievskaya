import React from 'react';
import './Products.css';
import Coffee1 from '../images/Coffee1.jpg';
import Coffee2 from '../images/Coffee2.webp';
import Coffee3 from '../images/Coffee3.jpg';

function Coffee() {
  return (
    <div className="Products">
        <h1>Кофе</h1>
        <div className='Products-main'>
            <div className='Products-container'>
                <img src = {Coffee1} alt="Coffee1"></img>
                <h2>Пряный раф</h2> {/* Название */}
                <h3>Авторский напиток</h3> {/* особенности */}
                <p>220 руб/0.3 л.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Coffee2} alt="Coffee2"></img>
                <h2>Латте</h2> {/* Название */}
                <h3>Классический напиток</h3> {/* особенности */}
                <p>240 руб/0.4 л.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Coffee3} alt="Coffee3"></img>
                <h2>Эспрессо</h2> {/* Название */}
                <h3>Классический напиток</h3> {/* особенности */}
                <p>120 руб/0.2 л.</p>   {/* цена */}
            </div>
        </div>
    </div>
  );
}

export default Coffee;