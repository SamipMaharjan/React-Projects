import React from 'react';
import { Menulist } from '../Helpers/Menulist';
import MenuItems from '../Componenets/MenuItems';
import '../Styles/Menu.css';

export default function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>
        Our Menu
      </h1>

      <div className="menuList">
        {
            Menulist.map( ( menuItem, key ) => {
                return <MenuItems image={menuItem.image} name={menuItem.name} price = {menuItem.price} key = {key}/>
            })
        }
      </div>
    </div>
  )
}
