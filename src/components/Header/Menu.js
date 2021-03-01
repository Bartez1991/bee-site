import React from 'react';
import MenuItems from './MenuItems';


function Item(props) {
  return (
    <li className="nav-item">
      <a href={props.url} className="nav-link">{props.title}</a>
    </li>
  );
}

function Menu() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        { MenuItems.map( (item, index) => <Item key={item.index} url={item.url} title={item.title}/> ) }
      </ul>
    </nav>
  )
}

export default Menu
