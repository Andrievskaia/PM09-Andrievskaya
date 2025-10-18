import React from 'react';
import './Products.css';
//Breakfast5 - с кабачком
import Breakfast1 from '../images/Breakfast1.jpg';
import Breakfast2 from '../images/Breakfast2.jpg';
import Breakfast3 from '../images/Breakfast3.jpg';
import Breakfast4 from '../images/Breakfast4.jpg';
import Breakfast5 from '../images/Breakfast5.jpg';
import Breakfast6 from '../images/Breakfast6.jpg';

function Breakfast() {
  return (
    <div className="Products">
        <h1>Завтраки</h1>
        <div className='Products-main'>
            <div className='Products-container'>
                <img src = {Breakfast1} alt="Breakfast1"></img>
                <h2>Бутерброд с семгой</h2> {/* Название */}
                <h3>Украшен листьями петрушки и яйцом</h3> {/* особенности */}
                <p>150 руб.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Breakfast2} alt="Breakfast2"></img>
                <h2>Тортилья ветчина-сыр</h2> {/* Название */}
                <h3>Подается 2-мя треугольниками</h3> {/* особенности */}
                <p>110 руб.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Breakfast3} alt="Breakfast3"></img>
                <h2>Дранники с зеленью</h2> {/* Название */}
                <h3>Картофельные дранники с сыром и зеленью</h3> {/* особенности */}
                <p>180 руб.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Breakfast4} alt="Breakfast4"></img>
                <h2>Омлет с семгой и авокадо</h2> {/* Название */}
                <h3>Фирменный рецепт</h3> {/* особенности */}
                <p>250 руб.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Breakfast5} alt="Breakfast5"></img>
                <h2>Омлет с кабачком</h2> {/* Название */}
                <h3>Подоётся с чесночным соусом или сметаной</h3> {/* особенности */}
                <p>150 руб.</p>   {/* цена */}
            </div>
            <div className='Products-container'>
                <img src = {Breakfast6} alt="Breakfast6"></img>
                <h2>Закрученный омлет</h2> {/* Название */}
                <h3>Фирменный рецепт</h3> {/* особенности */}
                <p>100 руб.</p>   {/* цена */}
            </div>
        </div>
    </div>
  );
}

export default Breakfast;