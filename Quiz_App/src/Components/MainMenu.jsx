import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';

export default function MainMenu( { quiz } ) {
  return (
    <div className='Menu'>
        <button onClick={quiz}>
            Start Game
        </button>
    </div>
  )
}
