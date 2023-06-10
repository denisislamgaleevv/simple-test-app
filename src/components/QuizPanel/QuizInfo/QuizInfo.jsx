  
import './QuizInfo.css';
import CloseIcon from '@mui/icons-material/Close';
export const QuizInfo = ({questions, 
    hideInfo, id, 
    time,
    len, 
    showInfo, 
    name , 
    quizDescription,  
    author,  
    renderTime
  }) => {
    
  return (
    <div className="QuizInfo">
       <div className="QuizInfoPanel">
       <CloseIcon className = {'CloseIcon'} onClick = {hideInfo}/>
       <div className='mainInfo'> 
       
       <>  
        <h3>{name}</h3>
        <h4>Автор: { author}</h4>
        
        <p>{ quizDescription}</p>
        <h4>На выполнение {renderTime(time)}</h4>
       </> 
       </div>
     </div>
       
    </div>
  );
}
 
/* 
    
      
       <CloseIcon className = {'CloseIcon'} onClick = {hideInfo}/>
       <div> 
       {questions[id] != undefined?
       <>  
       <h3>{questions[id].quizName}</h3>
       <h3>Автор: {questions[id].author}</h3>
       
       <h3>{questions[id].quizDescription}</h3>
       <h3>На выполнение {questions[id].time} минут</h3>
       </>: <>Ошибка</>}
       </div>

*/