import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './Components/Square'

function App() {
  const [ board, setBoard ] = useState([
    [ "", "", "" ], 
    [ "", "", "" ],
    [ "", "", "" ]
  ]);

  const [ noughtOrCross, setNoughtOrCross ] = useState('X');

  const updateSquare = ( row, column ) => {

    if ( board[ row ][ column ] == "" ){
      const newArray = [ ...board ];
      newArray[ row ][ column ] = noughtOrCross;
      setBoard( newArray );

      checkForWin( noughtOrCross );
      // assigning the array element associated with the square to nought or a cross.

      noughtOrCross == 'X' ? setNoughtOrCross('O') : setNoughtOrCross('X');
      // changing the nought or cross.
    }
    else{
      alert("The square is already taken ")
    }
  }

  const checkForWin = ( noughtOrCross ) => {
    if (
      (board[ 0 ][ 0 ] == noughtOrCross && board[ 0 ][ 1 ] == noughtOrCross && board[ 0 ][ 2 ] == noughtOrCross) ||
      (board[ 1 ][ 0 ] == noughtOrCross && board[ 1 ][ 1 ] == noughtOrCross && board[ 1 ][ 2 ] == noughtOrCross) ||
      (board[ 2 ][ 0 ] == noughtOrCross && board[ 2 ][ 1 ] == noughtOrCross && board[ 2 ][ 2 ] == noughtOrCross) ||
      (board[ 0 ][ 0 ] == noughtOrCross && board[ 1 ][ 0 ] == noughtOrCross && board[ 2 ][ 0 ] == noughtOrCross) ||
      (board[ 0 ][ 1 ] == noughtOrCross && board[ 1 ][ 1 ] == noughtOrCross && board[ 2 ][ 1 ] == noughtOrCross) ||
      (board[ 0 ][ 2 ] == noughtOrCross && board[ 1 ][ 2 ] == noughtOrCross && board[ 2 ][ 2 ] == noughtOrCross) ||
      (board[ 0 ][ 0 ] == noughtOrCross && board[ 1 ][ 1 ] == noughtOrCross && board[ 2 ][ 2 ] == noughtOrCross) ||
      (board[ 0 ][ 2 ] == noughtOrCross && board[ 1 ][ 1 ] == noughtOrCross && board[ 2 ][ 0 ] == noughtOrCross)
    )
    {  
      setTimeout( () => {
        alert(`${noughtOrCross} has won the game.`);
      }, 300);
    }
    else
    {
      checkForDraw();
    }
  } 

  const checkForDraw = () => {
    let count = 0; 
    for ( let i = 0; i <= 2; i++ )
    {
      for ( let j = 0; j <= 2; j++ )
      {
        if ( board[i][j] != "" )
        {
          count++;
        }
      }
    }
    if ( count == 9 )
    {
      setTimeout( () => {
        alert("Game is drawed.")
      }, 100);
    }
  }

  const restartGame = () => {
    const emptyBoard = [
      [ "", "", "" ], 
      [ "", "", "" ],
      [ "", "", "" ]
    ]
    for ( let i = 0; i <= 2; i++ )
    {
      for ( let j = 0; j <= 2; j++ )
      {
        setBoard( emptyBoard ); 
      }
    }
  }

  return (
    <div className="App">
      <div className="board">

        <div className="row row1">
          <Square value={board[0][0]} chooseSquare={ () => { updateSquare( 0, 0 )}}/>
          <Square value={board[0][1]} chooseSquare={ () => { updateSquare( 0, 1 ) }}/>
          <Square value={board[0][2]} chooseSquare={ () => { updateSquare( 0, 2 ) }}/>
        </div>
        {/* Row 1  */}

        <div className="row row2">
          <Square value={board[1][0]} chooseSquare={ () => { updateSquare( 1, 0 ) }}/>
          <Square value={board[1][1]} chooseSquare={ () => { updateSquare( 1, 1 ) }}/>
          <Square value={board[1][2]} chooseSquare={ () => { updateSquare( 1, 2 ) }}/>
        </div>
        {/* Row 2 */}
        
        <div className="row row3">
          <Square value={board[2][0]} chooseSquare={ () => { updateSquare( 2, 0 ) }}/>
          <Square value={board[2][1]} chooseSquare={ () => { updateSquare( 2, 1 ) }}/>
          <Square value={board[2][2]} chooseSquare={ () => { updateSquare( 2, 2 ) }}/>
        </div>
        {/* Row 3 */}


      </div>
      {/* board*/}

      <div className="button">
        <button onClick={restartGame}>Restart</button>
      </div>
      {/* Restart button */}
    </div>
  )
}

export default App
