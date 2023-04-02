import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';

export default function EndScreen() {
  const { score } = useContext( QuizContext );
  return (
    <div className='endScreen'>
      Your score is { score } out of { Questions.length }
    </div>
  )
}
