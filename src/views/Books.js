import React from 'react';
import './Products.css';
import Books1 from '../images/Books1.jpg';

function Books() {
  return (
    <div className="Products">
        <h1>Книги</h1>
        <div className='Products-main'>
            <div className='Products-container'>
                <img src = {Books1} alt="Books1"></img>
                <h2>Книга</h2> {/* Название */}
                <h3>Скоро добавим!</h3> {/* особенности */}
                <p>Нет в наличии</p>   {/* цена */}
            </div>
        </div>
    </div>
  );
}

export default Books;