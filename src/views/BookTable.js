import React from 'react';
import './Products.css';

function BookTable() {
  return (
    <div className="BookTable">
        <h1>Забронировать столик</h1>
        <div className='Form'>
            <div className='Form-write'>
                <h2>Дата и время брони</h2>
                <input
                    type="data"/>
            </div>
            <div className='Form-write'>
                <h2>Количество гостей</h2>
                <input
                    type="number"/>
            </div>
            <div className='Form-write'>
                <h2>Имя и номер телефона</h2>
                <input
                    type="text"/>
            </div>
            <div className='button'>
                    <button type="submit">Зарегистрироваться</button>
            </div>
        </div>
    </div>
  );
}

export default BookTable;