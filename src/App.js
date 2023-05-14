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
function App() {
  const quizArr = [
    {                  //первый элемент
 
    quizName: 'Базовые понятия программирования', 
    time: 1, 
    questions:[
    {
         
        questionText: 'Самый быстрый язык программирования', 
        answerOptions: [
            {answerText: 'C++', isCorrect: true},
            {answerText: 'python', isCorrect: false},
            {answerText: 'javascript', isCorrect: false},
            {answerText: 'go', isCorrect: false}
        ]
    }, 
    {
        
        questionText: 'Что не относится к структурам данных?', 
        answerOptions: [
            {answerText: 'Стек', isCorrect: false},
            {answerText: 'Очередь', isCorrect: false},
            {answerText: 'База данных', isCorrect: true},
            {answerText: 'Граф', isCorrect: false},
            {answerText: 'Дерево', isCorrect: false}
        ]
    }, 
    {
        
        questionText: 'Какая самая медленная сортировка массива?', 
        answerOptions: [
            {answerText: 'Пузырьковая', isCorrect: false},
            {answerText: 'Выбором', isCorrect: false},
            {answerText: 'Вставками', isCorrect: false},
            {answerText: 'Болотная', isCorrect: true} 
        ]
    }
  ]}
  
  , 
  
  {                  //второй элемент
 
    quizName: 'Столицы', 
    time: 2, 
    questions:[
    {
        
        questionText: 'Столицей Франции является город:', 
        answerOptions: [
            {answerText: 'Брюссель', isCorrect: false},
            {answerText: 'Париж', isCorrect: true},
            {answerText: 'Мадрид', isCorrect: false},
            {answerText: 'Лиссабон', isCorrect: false}
        ]
    }, 
    {
     
        questionText: 'Столицей США является город:', 
        answerOptions: [
            {answerText: 'Голливуд', isCorrect: false},
            {answerText: 'Нью-Йорк', isCorrect: false},
            {answerText: 'Вашингтон', isCorrect: true},
            {answerText: 'Бостон', isCorrect: false},
         
        ]
    } ,
    {
     
      questionText: 'Столицей Южной Кореи является город:', 
      answerOptions: [
          {answerText: 'Сеул', isCorrect:true},
          {answerText: 'Пхеньян', isCorrect: false},
          {answerText: 'Таубей', isCorrect: false},
          {answerText: 'Дакка', isCorrect: false},
       
      ]
  } 
  ,
    {
     
      questionText: 'Столицей Турции является город:', 
      answerOptions: [
          {answerText: 'Анталия', isCorrect:false},
          {answerText: 'Анкара', isCorrect: true},
          {answerText: 'Стамбул', isCorrect: false},
          {answerText: 'Измир', isCorrect: false},
       
      ]
  } 
  ,
    {
     
      questionText: 'Административной столицей ЮАР является город:', 
      answerOptions: [
          {answerText: 'Йоханнесбург', isCorrect:false},
          {answerText: 'Кейптаун', isCorrect: false},
          {answerText: 'Претория', isCorrect: true},
          {answerText: 'Дурбан', isCorrect: false},
       
      ]
  } 
  ]
}
, 
  
{                  //третий элемент
   
  quizName: 'Основы python', 
  time: 5, 
  questions:[
  {
      
      questionText: 'Выберите все варианты программ, которые выводят на экран текст «Здравствуй, мир!» (без кавычек).', 
      answerOptions: [
          {answerText: 'print("Здравствуй, мир!")', isCorrect: true},
          {answerText: "print('Здравствуй', ' мир!')", isCorrect: false},
          {answerText: 'print(Здравствуй, мир!)', isCorrect: false},
          
      ]
  }
]
}
, 
  
{                  //третий элемент
   
  quizName: 'Основы python', 
  time: 14, 
  questions:[
  {
      
      questionText: 'Выберите все варианты программ, которые выводят на экран текст «Здравствуй, мир!» (без кавычек).', 
      answerOptions: [
          {answerText: 'print("Здравствуй, мир!")', isCorrect: true},
          {answerText: "print('Здравствуй', ' мир!')", isCorrect: false},
          {answerText: 'print(Здравствуй, мир!)', isCorrect: false},
          
      ]
  }
]
}
, 
  
{                  //третий элемент
   
  quizName: 'Основы python', 
  time: 10, 
  questions:[
  {
      
      questionText: 'Выберите все варианты программ, которые выводят на экран текст «Здравствуй, мир!» (без кавычек).', 
      answerOptions: [
          {answerText: 'print("Здравствуй, мир!")', isCorrect: true},
          {answerText: "print('Здравствуй', ' мир!')", isCorrect: false},
          {answerText: 'print(Здравствуй, мир!)', isCorrect: false},
          
      ]
  }
]
}
, 
  
{                  //третий элемент
   
  quizName: 'Основы python', 
  time: 10, 
  questions:[
  {
      
      questionText: 'Выберите все варианты программ, которые выводят на экран текст «Здравствуй, мир!» (без кавычек).', 
      answerOptions: [
          {answerText: 'print("Здравствуй, мир!")', isCorrect: true},
          {answerText: "print('Здравствуй', ' мир!')", isCorrect: false},
          {answerText: 'print(Здравствуй, мир!)', isCorrect: false},
          
      ]
  }
]
}
, 
  
{                  //третий элемент
   
  quizName: 'Основы python', 
  time: 10, 
  questions:[
  {
      
      questionText: 'Выберите все варианты программ, которые выводят на экран текст «Здравствуй, мир!» (без кавычек).', 
      answerOptions: [
          {answerText: 'print("Здравствуй, мир!")', isCorrect: true},
          {answerText: "print('Здравствуй', ' мир!')", isCorrect: false},
          {answerText: 'print(Здравствуй, мир!)', isCorrect: false},
          
      ]
  }
]
}
   
 

]
const [searchValue, setSearchValue] = useState('');
const [quizVisibility, setQuizVisibility] = useState(false)
const [tTest, setTTest] = useState([])
const [marathonArr, setMarathonArr] =useState([])
const [marathonVisibility, setMarathonVisibility] = useState(false)
const showTest = (elem) =>{
  setQuizVisibility(true)
  setTTest(elem)
}
const hideTest = () =>{
  setQuizVisibility(false)  
  setMarathonVisibility(false)
}
const seeMistakesEvent = () =>{
  alert('Ошибки')
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
            />
            : 
            <div className='AppContainer'> 
            {!marathonVisibility ?
            <div className="inputDiv">  
             <input  value = {searchValue}                        
                  onChange={e => setSearchValue(e.target.value)} 
                  className="search-input" 
                  placeholder= { "Поиск по названию" }
              />
              <button className='buttonMarafon' onClick = {marathonEvent}>Марафон вопросов</button>
              <button className='buttonMarafon' onClick = {seeMistakesEvent}>Мои ошибки</button>
              </div> : <></>}
              <div className="container">
                 {marathonVisibility ?
                <div className='marathonPanel'>
                  <Quiz
                  hideTest={hideTest}
                  time = {60}
                  questions={marathonArr}
               
                  /> 
               </div> 
                 
            :
            <div className="panel">
            {quizArr 
              .filter((elem)=> elem.quizName.toLowerCase().includes(searchValue.toLowerCase()))
              .map((elem) => 
              
                <QuizPanel 
                  
                  time = {elem.time}
                  len = {elem.questions.length}
                  image = {elem.quizImage} 
                  name = {elem.quizName}
                  showTest = {() => showTest(elem)}
                />  
              )} </div>
            }
             
            </div>
            </div>
          } </> }/> 
          <Route path =  '/statistics' element={<Statistics stquestions = {quizArr} />}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/' element={<Main/>}/> 
      </Routes>
    </div>
    </>
  );
}
export default App;

 
