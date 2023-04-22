  
import './QuizPanel.css';

export function QuizPanel({name, image}) {
  return (
    <div className="QuizPanel">
      
      <img className = {'quizPanelImage'} src = {image}/>
      <h3>{name}</h3>
      <button className='button'>Начать</button>
    </div>
  );
}
 