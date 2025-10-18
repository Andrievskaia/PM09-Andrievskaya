import React from 'react';
import './Menu.css';



function Menu({setPage}) {
  return (
    <div className="Menu">
        <h1>Меню кофейни</h1>
        <div className='Menu-container'>
            <ul>
                <li onClick={() => setPage('Coffee')}>Кофе</li>
                <li onClick={() => setPage('Dessert')}>Десерты</li>
                <li onClick={() => setPage('Breakfast')}>Завтраки</li>
                <li onClick={() => setPage('Books')}>Книги</li>
            </ul>
        </div>
    </div>
  );
}


export default Menu;