  
import './QuizPanel.css';

export function QuizPanel({name, image, showTest}) {
  return (
    <div className="QuizPanel">
      <div className='quizPanelImageContainer'>  
      <img className = {'quizPanelImage'} src = {image}/>
      </div>
      <h3>{name}</h3>
      <button className='button' onClick = {showTest}>Начать</button>
    </div>
  );
}
 




