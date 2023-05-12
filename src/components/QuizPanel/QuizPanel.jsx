import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import './QuizPanel.css';
 
export function QuizPanel({name, image, showTest, len, time}) {
 
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
    
    if ((len %10 == 2 || len %10 == 3 || len %10 == 4)&& len !== 12 && len !== 13 && len !== 14) {
      return  <span> {l} минута</span>  
    }
    else   {
      return  <span> {l} минут</span>  
    }
    
  }
  const infoIconClickHandler = () =>{
    alert('Этот тест хороший' )
  }
  return (
    
    <div className="QuizPanel">
       
       

      <div className='timeDiv'>  
      <InfoIcon className='InfoIcon' onClick = {infoIconClickHandler} /> 
      <AccessTimeIcon/> <p className='time'>{renderTime(time)} </p>
      
     
     
      </div>
      <h3 className='testH'>{name}</h3>
      {renderLen(len)}
      <button className='button' onClick = {showTest}>Начать</button>
    </div>
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