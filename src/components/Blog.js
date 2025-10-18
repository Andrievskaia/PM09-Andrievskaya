import React from 'react';
import './Blog.css';
import Blog1 from '../images/Blog.jpg';




function Blog() {
  return (
    <div className="Blog">
        <h1>Анонсы культурных событий</h1>
        <div className="Blog-container">
            <div className='Blog-img'>
                <img src = {Blog1} alt="Blog1"></img>
            </div>
            <div className='Blog-text'>
                <h2>Встречи с авторами</h2>
                <h2>Творческая встреча с Леной Сокол</h2>
                <h3>Дата: 18 октября, 11:30
                    <p>Место: Библиотека им. Н.А. Некрасова</p>
                    <p>Тема: «Как стать автором молодежных бестселлеров»</p>
                    <p>Формат: Открытая беседа с автором</p></h3>
            </div>
        </div>
        <div className='Form-container'>
            <h1>Зарегистрироваться</h1>
        <div className='Form'>
            <div className='Form-write'>
                <h2>Укажите телефон и имя</h2>
                <input
                    type="text"/>
            </div>
            <div className='button'>
                    <button type="submit">Зарегистрироваться</button>
            </div>
        </div>
        </div>
    </div>
  );
}


export default Blog;