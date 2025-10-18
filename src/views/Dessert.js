import React from 'react';
import './Products.css';
import Dessert1 from '../images/Dessert1.jpg';
import Dessert2 from '../images/Dessert2.jpg';
import Dessert3 from '../images/Dessert3.jpg';

function Dessert() {
  return (
    <div className="Products">
        <h1>Десерты</h1>
        <div className='Products-main'>
            <div className='Products-container'>
                <img src = {Dessert1} alt="Dessert1"></img>
                <h2>Тирамиссу</h2> {/* Название */}
                <h3>Украшен голубикой и малиновым вареньем</h3> {/* особенности */}
                <p>200 руб.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Dessert2} alt="Dessert2"></img>
                <h2>Чизкейк</h2> {/* Название */}
                <h3>Торт веганский с украшением из ягод</h3> {/* особенности */}
                <p>1500 руб/кг.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Dessert3} alt="Dessert3"></img>
                <h2>Мусс</h2> {/* Название */}
                <h3>Ванильный мусс украшенный какао</h3> {/* особенности */}
                <p>120 руб.</p>   {/* цена */}
            </div>
        </div>
    </div>
  );
}

export default Dessert;