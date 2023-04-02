import React, { useContext } from 'react'
import { ThemeContext } from '../App.jsx';

export default function Child1() {
    const { name, setName } = useContext(ThemeContext);
  return (
    <div>
        <h1>{name}</h1>
      <button onClick={setName('Leptin Horrus')}>change name</button>
      {/* <button onClick={setName('Samip Maharjan')}>change name</button> */}
    </div>
  )
}
