import './App.css';
import { Quiz } from './components/Quiz/Quiz';
import { QuizPanel } from './components/QuizPanel/QuizPanel';

import { Header } from './components/Header/Header';

import {React, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Register } from './components/Register/Register'; 
import { Main } from './components/Main/Main';
import {Routes, Route} from 'react-router-dom'; 
import { Statistics } from './components/Statistics/Statistics';

import { quizArr } from './tests';
function App() {
  
const [searchValue, setSearchValue] = useState('');
const [quizVisibility, setQuizVisibility] = useState(false)
const [tTest, setTTest] = useState([])
const [marathonArr, setMarathonArr] =useState([])
//localStorage.getItem('mistakesArr')
const [mistakesArr, setMistakesArr] =useState([])
const [mistakesVisibility, setMistakesVisibility] = useState(false)
const [marathonVisibility, setMarathonVisibility] = useState(false)
const [infoVisibility, setInfoVisibility]  = useState(false)
const showInfo = () =>{
  setInfoVisibility(true)
  document.body.classList.add('body-lock-scroll');
}
 
const showTest = (elem) =>{
  setQuizVisibility(true)
  setTTest(elem)
  
}
const hideTest = () =>{
  setQuizVisibility(false)  
  setMarathonVisibility(false)
  setMistakesVisibility(false)
}
const seeMistakesEvent = () =>{
  setMistakesVisibility(true)
}
const marathonEvent = () =>{
  setMarathonVisibility(true)
  let t = []
  quizArr.map((test)=> {
    test.questions.map((elem)=>{
      t.push(elem)
    })
  })
  setMarathonArr(t)
  
}
  return (
    <>
   
        <Header/>  
        
    <div className="App"> 
     
       <Routes>  
        <Route path='/test' element= {  <> 
         

          {quizVisibility? 
            <Quiz 
            questions={tTest.questions} 
            hideTest = {hideTest}
            time = {tTest.time}
            setMistakesArr = {setMistakesArr}
                  mistakesArr = {mistakesArr}
            />
            : 
            <div className='AppContainer'> 
              
            {!mistakesVisibility ?
            <> {!marathonVisibility ?
            <div className="inputDiv">  
             <input  value = {searchValue}                        
                  onChange={e => setSearchValue(e.target.value)} 
                  className="search-input" 
                  placeholder= { "Поиск по названию" }
              />
              <button className='buttonMarafon' onClick = {marathonEvent}>Марафон вопросов</button>
              <button className='buttonMarafon' onClick = {seeMistakesEvent}>Мои ошибки</button>
              </div> : <></>}</>:<></>}
              <div className="container">
               
                <div> {(marathonVisibility || mistakesVisibility)?
                <div>
                {marathonVisibility ?
                <div className='marathonPanel'>
                  <Quiz
                  hideTest={hideTest}
                  time = {60}
                  questions={marathonArr}
                  setMistakesArr = {setMistakesArr}
                  mistakesArr = {mistakesArr}
             
                  /> 
               </div> 
                : <></>}
                <div>
                {(mistakesVisibility)?
                <div className='marathonPanel'>
                  <Quiz
                  hideTest={hideTest}
                  time = {60}
                  questions={mistakesArr}
                  setMistakesArr = {setMistakesArr}
                  mistakesArr = {mistakesArr}
                  mistakesVisibility = {mistakesVisibility}
                  /> 
               </div> 
                : <> </>}
                </div>
                </div>
               
                
            :
            <div className="panel">
             
            {quizArr 
              .filter((elem)=> elem.quizName.toLowerCase().includes(searchValue.toLowerCase()))
              .map((elem ) => 
              <>  
              
              <QuizPanel 
              
              id = {elem.id}
              time = {elem.time}
              len = {elem.questions.length}
              showInfo = {showInfo}
              name = {elem.quizName}
              quizDescription = {elem.quizDescription }
              author={elem.author}
              showTest = {() => showTest(elem)}
              infoVisibility = {infoVisibility}
              setInfoVisibility = {setInfoVisibility}
            />    
            </>
                 
              )} </div>
            }</div>
             
            </div>
            
            </div>
               
          }</>}  /> 
          <Route path =  '/statistics' element={<Statistics stquestions = {quizArr} />}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/' element={<Main/>}/> 
      </Routes>
      
    </div>
    </>
  );
}
export default App;

 
