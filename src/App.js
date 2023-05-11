import './App.css';
import { Quiz } from './components/Quiz/Quiz';
import { QuizPanel } from './components/QuizPanel/QuizPanel';
import { Header } from './components/Header/Header';
import {React, useState} from 'react';

import { Register } from './components/Register/Register'; 
import { Main } from './components/Main/Main';
import {Routes, Route} from 'react-router-dom'; 
function App() {
  const quizArr = [
    {                  //первый элемент
 
    quizName: 'Базовые понятия программирования', 
    time: 15, 
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
 
    quizName: 'Основы ООП', 
    time: 15, 
    questions:[
    {
        
        questionText: 'Выберите правильную структуру альтернативного условного оператора (полный вариант).', 
        answerOptions: [
            {answerText: 'If <условие> Then <оператор 1>', isCorrect: true},
            {answerText: 'If <условие> Then <оператор 1> Else <оператор 2>', isCorrect: false},
            {answerText: 'If <условие> THEN <оператор 1> <оператор 2>', isCorrect: false},
            {answerText: 'If <условие1> Then If <условие2> Then <оператор1> <оператор2>', isCorrect: false}
        ]
    }, 
    {
     
        questionText: 'Что из этого не является циклом:', 
        answerOptions: [
            {answerText: 'Do While', isCorrect: false},
            {answerText: 'Do Until', isCorrect: false},
            {answerText: 'Select case', isCorrect: true},
            {answerText: 'For …Next', isCorrect: false},
         
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

const [quizVisibility, setQuizVisibility] = useState(false)
const [tTest, setTTest] = useState([])


const showTest = (elem) =>{
  setQuizVisibility(true)
  setTTest(elem.questions)
}
const hideTest = () =>{
  setQuizVisibility(false)  
  
}

  return (
    <>
   
        <Header/>  
        
    <div className="App"> 
       <Routes>  
        <Route path='/test' element= {  <> 
          {quizVisibility? 
            <Quiz questions={tTest} hideTest = {hideTest}/>
            : 
            <div className="panel">
              {quizArr.map((elem) => 
              
                <QuizPanel 
                  time = {elem.time}
                  len = {elem.questions.length}
                  image = {elem.quizImage} 
                  name = {elem.quizName}
                  showTest = {() => showTest(elem)}
                />  
              )}
            </div>
          } </> }/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/' element={<Main/>}/> 
      </Routes>
    </div>
    </>
  );
}
export default App;

 
