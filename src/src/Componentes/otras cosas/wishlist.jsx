import React from 'react'
import './wishlist.css'
const wishes = [
{ text: 'Saber programación', done: false},
{ text: 'Muchos gatos', done: true},
{ text: 'Comer', done: true},
];

const wishlist = () => (
  <div className="index">
    <h1>Lista deseos</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">Añade deseos</legend>
      <input className="wish-input_field" placeholder="Introduce texto aqui" />
    </fieldset>
    <ul className="wish-list">
        {wishes.map(({ text,done }, i) => (
          <li key={text} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
            <label htmlFor={`wish${i}`}>
            <input id={`wish${i}`} type="checkbox" checked={done}/>
              {text}
            </label>
          </li>
        ))}
    </ul> 
    <button className="wish-clear" type="button" >Guardar</button>
  </div>
)
export default wishlist;