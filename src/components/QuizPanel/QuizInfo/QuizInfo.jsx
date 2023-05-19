  
import './QuizInfo.css';
import CloseIcon from '@mui/icons-material/Close';
export const QuizInfo = ({  hideInfo, author, quizDescription, time, name}) => {
  return (
    <div className="QuizInfo">
       <div className="QuizInfoPanel">
        
       
       <CloseIcon className = {'CloseIcon'} onClick = {hideInfo}/>
       <div> 
       <h3>{name}</h3>
       <h3>Автор: {author}</h3>
       
       <h3>{quizDescription}</h3>
       <h3>На выполнение {time} минут</h3>
      
       </div>
     </div>
       
    </div>
  );
}
 
