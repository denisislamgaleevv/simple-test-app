import './App.css';
import { Quiz } from './components/Quiz/Quiz';
import { QuizPanel } from './components/QuizPanel/QuizPanel';


function App() {
  const quizArr = [
    
    {
    quizImage: 'https://timeweb.com/media/articles/0001/08/thumb_7309_articles_standart.jpeg', 
    quizName: 'Базовые понятия программирования', 
    test:[
    {
        questionImage: 'https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg', 
        questionText: 'Самый быстрый язык программирования', 
        answerOptions: [
            {answerText: 'C++', isCorrect: true},
            {answerText: 'python', isCorrect: false},
            {answerText: 'javascript', isCorrect: false},
            {answerText: 'go', isCorrect: false}
        ]
    }, 
    {
        questionImage: 'https://itproger.com/img/news/1564129400.jpg', 
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
        questionImage: 'https://bookflow.ru/wp-content/uploads/2020/03/Adobe_Post_20181209_130627-min.jpg', 
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
  
  {
    quizImage: 'https://waksoft.susu.ru/wp-content/uploads/2020/08/oop.jpg', 
    quizName: 'Основы ООП', 
    test:[
    {
        questionImage: 'https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg', 
        questionText: 'Выберите правильную структуру альтернативного условного оператора (полный вариант).', 
        answerOptions: [
            {answerText: 'If <условие> Then <оператор 1>', isCorrect: true},
            {answerText: 'If <условие> Then <оператор 1> Else <оператор 2>', isCorrect: false},
            {answerText: 'If <условие> THEN <оператор 1> <оператор 2>', isCorrect: false},
            {answerText: 'If <условие1> Then If <условие2> Then <оператор1> <оператор2>', isCorrect: false}
        ]
    }, 
    {
        questionImage: 'https://itproger.com/img/news/1564129400.jpg', 
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
]
  return (
    <div className="App">
        {quizArr.map((elem) => 
          <QuizPanel image = {elem.quizImage} name = {elem.quizName} /> //название и картинка
        )}
    </div>
  );
}
export default App;

//   { 
 // quizArr.map((elem) =>  {console.log(elem.questions)}   )
      
//} 

