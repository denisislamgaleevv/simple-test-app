import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import './QuizPanel.css';
import { QuizInfo } from './QuizInfo/QuizInfo';
import { React, useState, useEffect} from 'react';
export function QuizPanel({questions, copyArr,  author, name,  id, quizDescription,  showTest, len, time, showInfo, 
  infoVisibility, 
   setInfoVisibility, num}) {
   
  function renderLen(l) {
    if (len %10 == 1 && len !== 11) {
      return  <h4 className='len'>{len} вопрос</h4> 
    }
    else if ((len %10 == 2 || len %10 == 3 || len %10 == 4)&& len !== 12 && len !== 13 && len !== 14) {
      return  <h4 className='len'>{len} вопроса</h4> 
    }
    else{
      return  <h4 className='len'>{len} вопросов</h4> 
    }
  }
  function renderTime(l) {
    
    if ((l %10 == 1  ) && l !== 12 && l !== 13 && l !== 14) {
      return  <span> {l} минута</span>  
    }
    else if ((l %10 == 2 || l %10 == 3 || l %10 == 4)&& l !== 12 && l !== 13 && l !== 14)  {
      return  <span> {l} минуты</span>  
    }
    else   {
      return  <span> {l} минут</span>  
    }
    
  }
  const hideInfo = () =>{
    setInfoVisibility(false)
    document.body.classList.remove('body-lock-scroll');
  }
  
  const [element, setElement] = useState(null);
  const renderElement = () => {
    
    return <QuizInfo 
      id = {id}
      time = {time}
      hideInfo = {hideInfo}
      showInfo = {showInfo}
      name = {name}
      quizDescription = {quizDescription }
      author={author}
      renderTime = {renderTime}
   />;
    
  };

   
  const infoButtonClickHandler = event =>{
    const id = event.currentTarget.id;
    console.log(id)
    const elem =  renderElement()
    setElement(elem)
    setInfoVisibility(true)
     
  }
  return (
    <>  
    { 
      <>{
        infoVisibility?
        element  : <></>
     
    }</>   
     }
    <div className="QuizPanel">
         

      <div className='timeDiv'>  
      <InfoIcon className='InfoIcon' id = {id} onClick = {infoButtonClickHandler}     /> 
      <AccessTimeIcon/> <p className='time'>{renderTime(time)} </p>
      
     
     
      </div>
      <h3 className='testH'>{name}</h3>
      {renderLen(len)}
      <button className='button' onClick = {showTest}>Начать</button>
    </div>
    </>
  );
}
//1 вопрос
//2 вопроса 
//3 вопроса
//4 вопроса
//5 вопросов
//6 вопросов
//7 вопросов
//8 вопросов
//9 вопросов
//10 вопросов
//11 вопросов
//12 вопросов
//13 вопросов
//14 вопросов
//15 вопросов
//16 вопросов
//17 вопросов
//18 вопросов
//19 вопросов
//20 вопросов
//21 вопрос
//22 вопроса
//23 вопроса
//24 вопроса
//25 вопросов
//26 вопросов