 
import './Quiz.css';
import {React, useState, useEffect} from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; 
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
export const Quiz = ({questions, hideTest, time,  setMarathonVisibility, setMistakesArr, mistakesArr, mistakesVisibility}) => {
     

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore]  = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [buttonColorVisibility, setButtonColorVisibility] = useState(false)
    const [isCounting, setIsCounting]= useState(false)//timer
    const [timeLeft, setTimeLeft] = useState(time*60)  
    const [correctedAnswerArr, setCorrectedAnswerArr]= useState([])  
    const getPadTime = (time) =>time.toString().padStart(2, '0');;
    const minutes = getPadTime(Math.floor(timeLeft/60)); 
    const seconds = getPadTime(timeLeft - minutes*60); 
    useEffect(() =>{
        
        const interval = setInterval(()=>{
          
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft-1: 0))
        }, 1000); 
      
        return () => clearInterval( interval);
    
     }, [])
    
    const handleStart = () =>{

    }
    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Enter'){
              //  handleNextQuestion()
                
       
            }
        })   
      
       
    }, []);

    const handleAnswerOptionClick = (isCorrect) =>{
        //if (currentQuestion===questions.length-1 && isCorrect && mistakesVisibility){
        //    let t = correctedAnswerArr
        //    t.push(questions[currentQuestion])
        //    setCorrectedAnswerArr(t)
        //    correctedAnswerArr.map((elem) => { 
        //        const numberToDelete = elem;
        //        const filteredNumbers = questions.filter((number) => number !== numberToDelete);
        //          
        //        setMistakesArr(filteredNumbers)
        //    })
        //    
        //}
       // else 
       if (isCorrect && mistakesVisibility){
            setScore(score+1)
        //    
        let t = correctedAnswerArr
        t.push(questions[currentQuestion])
        setCorrectedAnswerArr(t)
        }
        else if (isCorrect){
            setScore(score+1)
        }
        
        else if (!mistakesVisibility){
            let t = []
            let flag = true; 
            if (questions != undefined){
          //  questions.map((elem)=>{
          //      if (elem === questions[currentQuestion]){
          //          flag = false
          //      }
          //      
          //  })
            if (flag){ 
                t.push(questions[currentQuestion]) 
                const newArray= [].concat(t, mistakesArr)
                setMistakesArr(newArray )
                localStorage.setItem('mistakesArr', mistakesArr)
                }
            }

        }

        setButtonColorVisibility(true)
    }
    function renderTestResultIcon(correctAnswers){ //80%
        if (correctAnswers>0.8*questions.length){
            return <ThumbUpAltIcon/> 
        }
        else{ 
            return <ThumbDownAltIcon/> 
        }
    }
    const handleNextQuestion = () =>{
        if (buttonColorVisibility){
            const nextQuestion = currentQuestion+1
            if (nextQuestion < questions.length){
                setCurrentQuestion(nextQuestion)
            } else {
                setShowScore(true)
            }
            setButtonColorVisibility(false)
        }
        else{
            alert('Выберите ответ!')
        }
    }

    const refresh = ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
        setTimeLeft(time*60)
    }
    function renderScore(){
        if ((minutes.toString() === '00' && seconds.toString() === '00')&& (!showScore)){
            return (
        <div className='sectionScore'>
           { renderTestResultIcon(score)}
 
           <h3>Время вышло!</h3>
           <div>Правильных ответов {score} из {questions.length}</div>
           <button className='button' onClick={ refresh }>Пройти тест заново</button>
           <button className='button' onClick={ hideTest }>Вернуться к выбору теста</button>
           {mistakesVisibility? <><button className='button' onClick={ ()=>setMistakesArr([]) }>Очистить ошибки</button></>:<></>}
           </div>)
        }
        else return (
            <div className='sectionScore'>
               { renderTestResultIcon(score)}
               
               <div>Правильных ответов {score} из {questions.length}</div>
               <button className='button' onClick={ refresh }>Пройти тест заново</button>
               <button className='button' onClick={ hideTest }>Вернуться к выбору теста</button>
               {mistakesVisibility? <><button className='button' onClick={ ()=>setMistakesArr([]) }>Очистить ошибки</button></>:<></>}
               </div>)
            }
     
     //(minutes.toString() === '00' && seconds.toString() === '00')
     // {(minutes.toString() === '00' && seconds.toString() === '00') ? <h3>Время вышло!</h3> : <></>}
  return (
    <div>  
    {questions.length!=0 && typeof questions != 'undefined'?
    <div className="Quiz">
         
         {() => setIsCounting(true) }
        
        
          <div className="quiz">  
     {
         (showScore ||(minutes.toString() === '00' && seconds.toString() === '00')   )?
          <> {renderScore()} </>  
        :
    <div className='quiz'>
          
        <div className='questionSection'>
        
        <div className='timeContainer'>  
          <p className='timer'>   <AccessTimeIcon className='AccessTimeIcon'/>  {minutes}  : {seconds}  </p> 
        </div>
        <h3 className='scoreHeader'>  Верных ответов: {score} из {currentQuestion+1}</h3>
            <div className='questionCount'>
                <span>Вопрос {currentQuestion +1}</span>/{questions.length}
            </div>

            <div className='questionText'>
              <h3>  {questions[currentQuestion].questionText}</h3>
            </div>
            
            <div className='answerSection'>
              {questions[currentQuestion].answerOptions.map((item)=>(
                <>  
                 {!buttonColorVisibility?
                <button
                onClick={()=>handleAnswerOptionClick(item.isCorrect)}
                className={'button'}
                >{item.answerText}</button> : 
                <>
                {item.isCorrect?
                <button
                 
                className={'buttonGreen'}
                >{item.answerText}</button> : 
                <button
                
                className={'buttonRed'}
                >{item.answerText}</button>}
                </>}
                
                </>
                ))}
                 </div>
            

            
                 <button
                onClick={()=>handleNextQuestion()}
                className={'buttonNext'}
                >{currentQuestion!=questions.length-1? 'Следующий вопрос': 'Завершить тест' }  <ArrowForwardIcon/></button>
        </div>
        
    </div>
     }
    </div>
    {console.log(mistakesArr)}
    </div>


     : <>

     <h3>Ошибок нет!</h3>
     </>}
    </div>
  );
}
 