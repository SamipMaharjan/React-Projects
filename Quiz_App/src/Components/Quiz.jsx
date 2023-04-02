import React, { useContext, useState } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';

export default function Quiz() {
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ optionChoosen, setOptionChoosen ] = useState('');
  
  const { score, setScore, setGameState } = useContext( QuizContext );

  const nextQuestion = () => {
    console.log( currentQuestion );

    if ( optionChoosen == Questions[ currentQuestion ]["answer"] )
    {
      console.log("Right answer");
      setScore( score + 1 );
    }
    else{
      console.log("Wrong answer.");
      console.log("Current score:"+score);
    }
    // To check if the answer is correct or not 

    setCurrentQuestion( currentQuestion + 1 );
  }
  // To change the question 

  const finishQuiz = () => {
    if ( optionChoosen == Questions[ currentQuestion ]["answer"] )
    {
      console.log("Right answer");
      setScore( score + 1 );
    }
    else{
      console.log("Wrong answer.");
      console.log("Current score:"+score);
    }
    setGameState('end screen'); 
  }

  return (
    <div className='Quiz'>
      
      <h1>{Questions[ currentQuestion ]["prompt"]}</h1>
      
      <label htmlFor="OptionA">
        <input type="radio" id='OptionA' name='answer' onClick={ () => { setOptionChoosen('A')}}/>
          {Questions[ currentQuestion ]["optionA"]}
      </label>
      {/* OPtion A  */}

      <label htmlFor="OptionB">
      <input type='radio' id = 'OptionB' name='answer' onClick={ () => { setOptionChoosen('B')}}/>
        {Questions[ currentQuestion ]["optionB"]}
      
      </label>
      {/* Option B*/}

      <label htmlFor="OptionC">
        <input type="radio" id='OptionC' name='answer' onClick={ () => { setOptionChoosen('C')}}/>
            {Questions[ currentQuestion ]["optionC"]}
      </label>
       {/* Option C  */}

      <label htmlFor="OptionD">
        <input type="radio" id='OptionD' name='answer' onClick={ () => { setOptionChoosen('D')}} />
        {Questions[ currentQuestion ]["optionD"]}
      </label>
      {/* Option D  */}

    { currentQuestion < Questions.length - 1 ? (

    <button onClick={ () => { nextQuestion(); } }>Next Question</button>

    ) : (

      <button onClick={ finishQuiz }>Finish Quiz</button>

    ) }
    </div>

  )
}
