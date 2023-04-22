 
import './Quiz.css';
import {React, useState} from 'react';

export const Quiz = ({questions, hideTest}) => {
     

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore]  = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (isCorrect) =>{
        if (isCorrect){
            setScore(score+1)
        }
        const nextQuestion = currentQuestion+1
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }



    const refresh = ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }
    
  return (
    <div className="Quiz">
        {questions.map(()=>
        {console.log(questions)}
        )}
          <div className="quiz">  
     {
     showScore? 
     <div className='sectionScore'>
        <div>Правильных ответов {score} из {questions.length}</div>
        <button className='button' onClick={ refresh }>Пройти тест заново</button>
        <button className='button' onClick={ hideTest }>Вернуться к выбору теста</button>
        </div>
        :
    <div className='quiz'>
        
        <div className='questionSection'>

            <div className='imageSection'>
                <img className = 'image' src = {questions[currentQuestion].questionImage} alt='Image'/>
            </div>

            <div className='questionCount'>
                <span>Вопрос {currentQuestion +1}</span>/{questions.length}
            </div>

            <div className='questionText'>
              {questions[currentQuestion].questionText}
            </div>

            <div className='answerSection'>
              {questions[currentQuestion].answerOptions.map((item)=>(
                <button
                onClick={()=>handleAnswerOptionClick(item.isCorrect)}
                className={'button'}
                >{item.answerText}</button>     
                ))}
            </div>
            
        </div>
        
    </div>
     }
    </div>
    </div>
  );
}
 