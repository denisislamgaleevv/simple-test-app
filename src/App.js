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
    id: 1, 
    quizName: 'Государственная гражд. служба РФ', 
    quizDescription: '', 
    author: 'Denis', 
    time: 30, 
    questions:[
    {//1
         
        questionText: 'Предмет регулирования ФЗ 79', 
        answerOptions: [
            {answerText: 'Отношения, связанные с поступлением на государственную гражданскую службу, ее прохождением и прекращением, а также с определением правового положения (статуса) федерального государственного гражданского служащего и государственного гражданского служащего субъекта РФ.', isCorrect: true},
            {answerText: 'Отношения, связанные с поступлением на государственную гражданскую службу.', isCorrect: false},
            {answerText: 'Отношения, связанные с поступлением на государственную гражданскую службу, ее прохождением и прекращением.', isCorrect: false},
 
        ]
    }, 
    {//2
        
        questionText: 'Государственная гражданская служба Российской Федерации это:', 
        answerOptions: [
 
            {answerText: 'Вид государственной службы, представляющей собой профессиональную служебную деятельность граждан на должностях государственной гражданской службы по обеспечению исполнения полномочий федеральных государственных органов', isCorrect: false},
            {answerText: 'Вид государственной службы, представляющей собой профессиональную служебную деятельность граждан на должностях государственной гражданской службы по обеспечению исполнения полномочий федеральных государственных органов, государственных органов субъектов РФ, лиц, замещающих государственные должности РФ, и лиц, замещающих государственные должности субъектов РФ (включая нахождение в кадровом резерве и другие случаи).', isCorrect: true},
            {answerText: 'Вид государственной службы, представляющей собой профессиональную служебную деятельность граждан на должностях государственной гражданской службы по обеспечению исполнения полномочий федеральных государственных органов, государственных органов субъектов РФ', isCorrect: false},
        
        ]
    }, 
    {//3
        
        questionText: 'Государственной гражданская служба подразделяется на:', 
        answerOptions: [
 
            {answerText: 'Гражданскую, военную и правоохранительную службу', isCorrect: false},
            {answerText: 'Федеральную гражданскую и военную службу', isCorrect: false},
            {answerText: 'Федеральную гражданскую и государственную службу субъектов Российской Федерации.', isCorrect: true} 
        ]
    }
    , 
    {//4
        
        questionText: 'Принципы гражданской службы:', 
        answerOptions: [
 
            {answerText: 'приоритет прав и свобод человека и гражданина; профессионализм и компетентность гражданских служащих; стабильность гражданской службы; доступность информации о гражданской службе;  взаимодействие с общественными объединениями и гражданами;', isCorrect: false},
            {answerText: 'единство правовых и организационных основ федеральной гражданской службы и гражданской службы субъектов Российской Федерации; равный доступ граждан, владеющих государственным языком Российской Федерации, к гражданской службе и равные условия ее прохождения независимо от пола, расы, национальности, происхождения, имущественного и должностного положения, места жительства, отношения к религии, убеждений, принадлежности к общественным объединениям, а также от других обстоятельств, не связанных с профессиональными и деловыми качествами гражданского служащего;', isCorrect: false},
            {answerText: 'все ответы верны', isCorrect: true} 
        ]
    }
    , 
     
    {//5
        
        questionText: 'Взаимосвязь гражданской службы и государственной службы Российской Федерации иных видов обеспечивается посредством:', 
        answerOptions: [
 
            {answerText: 'соотносительности основных условий и размеров оплаты труда, основных государственных социальных гарантий; установления ограничений и обязательств при прохождении государственной службы Российской Федерации различных видов;', isCorrect: false},
            {answerText: 'учета стажа государственной службы Российской Федерации иных видов при исчислении стажа гражданской службы; соотносительности основных условий государственного пенсионного обеспечения граждан, проходивших государственную службу Российской Федерации.', isCorrect: false},
            {answerText: 'все ответы верны', isCorrect: true} 
        ]
    }
    , 
    {//6
        
        questionText: 'Взаимосвязь гражданской службы и муниципальной службы обеспечивается посредством:', 
        answerOptions: [
 
            {answerText: 'единства основных квалификационных требований к должностям гражданской службы и должностям муниципальной службы, ограничений и обязательств при прохождении гражданской службы и муниципальной службы и требований к профессиональной подготовке, переподготовке и повышению квалификации гражданских служащих и муниципальных служащих;', isCorrect: false},
            {answerText: 'учета стажа муниципальной службы при исчислении стажа гражданской службы и стажа гражданской службы при исчислении стажа муниципальной службы и  соотносительности основных условий оплаты труда и социальных гарантий гражданских служащих и муниципальных служащих;', isCorrect: false},
            {answerText: 'все ответы верны', isCorrect: true} 
        ]
    }
    
    , 
    {//16
        
        questionText: 'Расторжение срочного служебного контракта происходит', 
        answerOptions: [
 
            {answerText: 'по истечении срока его действия', isCorrect: false},
            {answerText: 'в любое время по соглашению сторон', isCorrect: false},
            {answerText: 'все ответы верны', isCorrect: true} 
        ]
    }
    , 
    {//17
        
        questionText: 'В соответствии с каким документом осуществляется профессиональная служебная деятельность гражданского служащего', 
        answerOptions: [
 
            {answerText: 'Трудовой Кодекс РФ.', isCorrect: false},
            {answerText: 'должностной регламент', isCorrect: true},
            {answerText: 'должностная инструкция', isCorrect: false} 
        ]
    }
    , 
    {//18
        
        questionText: 'Конфликт интересов- это', 
        answerOptions: [
 
            {answerText: 'ситуация, при которой личная заинтересованность гражданского служащего влияет или может повлиять на объективное исполнение им должностных обязанностей и привести к причинению вреда законным интересам граждан, организаций, общества, субъекта Российской Федерации или Российской Федерации.', isCorrect: true},
            {answerText: 'ситуация, при которой личная заинтересованность гражданского служащего влияет на объективное исполнение им должностных обязанностей и привести к причинению вреда законным интересам граждан.', isCorrect: false},
            {answerText: 'ситуация, при которой государственным гражданским служащим совершено коррупционное правонарушение', isCorrect: false} 
        ]
    }
    , 
    {//19
        
        questionText: 'Кто может поступить на гражданскую службу?', 
        answerOptions: [
              {answerText: 'На гражданскую службу вправе поступать граждане, достигшие возраста 20 лет, владеющие государственным языком Российской Федерации и соответствующие квалификационным требованиям, установленным настоящим Федеральным законом', isCorrect: false},
            {answerText: 'На гражданскую службу вправе поступать граждане Российской Федерации, достигшие возраста 18 лет до  65 лет, владеющие государственным языком Российской Федерации и соответствующие квалификационным требованиям, установленным настоящим Федеральным законом.', isCorrect: true},  
        
            {answerText: 'Нет верного ответа.', isCorrect: false},

          ]
    } , 
    {//14
        
        questionText: 'Гражданский служащий - это', 
        answerOptions: [
 
            {answerText: 'Гражданин Российской Федерации, взявший на себя обязательства по прохождению гражданской службы', isCorrect: false},
            {answerText: 'Гражданин Российской Федерации, взявший на себя обязательства по прохождению гражданской службы, осуществляющий профессиональную служебную деятельность на должности гражданской службы в соответствии с актом о назначении на должность и со служебным контрактом и получающий денежное содержание за счет средств федерального бюджета или бюджета субъекта Российской Федерации.', isCorrect: true},
            {answerText: 'Нет верного ответа', isCorrect: false} 
        ]
    }
    , 
    {//15
        
        questionText: 'Предельный возраст пребывания на  гражданской службе', 
        answerOptions: [
 
            {answerText: 'Предельный срок не установлен', isCorrect: false},
            {answerText: '65 лет', isCorrect: true},
            {answerText: '60 лет', isCorrect: false} 
        ]
    } 
    
  ]}
  
  , 
  
  {                  //второй элемент
    id: 2, 
    quizName: 'Должности гражданской \n службы', 
    author: 'Denis', 
    quizDescription: ' ', 
    time: 30, 
    questions:[

    {//7
        
        questionText: 'Кто утверждает должности гражданской службы?', 
        answerOptions: [
 
            {answerText: 'Правительство Российской Федерации', isCorrect: false},
            {answerText: 'Президент Российской Федерации', isCorrect: true},
            {answerText: 'Государственная дума Российской Федерации', isCorrect: false} 
        ]
    }
    , 
    {//8
        
        questionText: 'Классификация должностей гражданской службы', 
        answerOptions: [
 
            {answerText: 'Должности гражданской службы подразделяются на категории и группы.', isCorrect: true},
            {answerText: 'Должности гражданской службы подразделяются на классы и подклассы.', isCorrect: false},
            {answerText: 'Должности гражданской службы подразделяются на категории, группы и классы.', isCorrect: false} 
        ]
    }
    , 
    {//9
        
        questionText: 'Классификация видов категории гражданской службы:', 
        answerOptions: [
 
            {answerText: 'руководители; помощники (советники); специалисты; обеспечивающие специалисты;', isCorrect: true},
            {answerText: 'руководители; помощники; специалисты;', isCorrect: false},
            {answerText: 'руководители; помощники (советники); специалисты; технические специалисты;', isCorrect: false} 
        ]
    }
    , 
    {//10
        
        questionText: 'Какие бывают группы гражданской службы:', 
        answerOptions: [
 
            {answerText: 'высшие; главные; старшие; младшие.', isCorrect: false},
            {answerText: 'высшие; главные; ведущие; старшие; младшие.', isCorrect: true},
            {answerText: 'высшие; главные; ведущие; старшие; специальные.', isCorrect: false} 
        ]
    }
    , 
    {//11
        
        questionText: 'Реестры должностей государственной гражданской службы Российской Федерации', 
        answerOptions: [
 
            {answerText: 'Должности федеральной государственной гражданской службы, классифицированные по государственным органам, категориям, группам, а также по иным признакам, составляют перечни должностей федеральной государственной гражданской службы, являющиеся соответствующими разделами Реестра должностей федеральной государственной гражданской службы. ', isCorrect: true},
   
        ]
    }
    , 
    {//12
        
        questionText: 'Кто утверждает реестр должностей государственной гражданской службы Российской Федерации?', 
        answerOptions: [
 
            {answerText: 'Совет Федерации Российской Федерации', isCorrect: false},
            {answerText: 'Правительство Российской Федерации', isCorrect: false},
            {answerText: 'Президент Российской Федерации', isCorrect: true} 
        ]
    }
    , 
    {//13
        
        questionText: 'Классные чины гражданской службы присваиваются', 
        answerOptions: [
 
            {answerText: 'В пределах группы должностей гражданской службы.', isCorrect: true},
            {answerText: 'В пределах категории должностей гражданской службы', isCorrect: false},
            {answerText: 'В пределах категории и группы должностей гражданской службы', isCorrect: false} 
        ]
    }
    
  ]
}
 , 
  
  {                  //третий элемент
    id: 3, 
    quizName: 'Служебные контракты', 
    author: 'Denis', 
    quizDescription: ' ', 
    time: 30, 
    questions:[
      
      {//20
          
          questionText: 'Понятие и стороны служебного контракта', 
          answerOptions: [
   
              {answerText: 'Служебный контракт - соглашение между представителем нанимателя и гражданином, поступающим на гражданскую службу, или гражданским служащим о прохождении гражданской службы и замещении должности гражданской службы', isCorrect: true},
              {answerText: 'Служебный контракт - соглашение между работодателем и гражданином, поступающим на гражданскую службу.', isCorrect: false},
              {answerText: 'Служебный контракт - соглашение между представителем нанимателя и гражданским служащим о прохождении гражданской службы и замещении должности гражданской службы', isCorrect: false} 
          ]
      }
       
      , 
      {//22
          
          questionText: 'Срок действия срочного служебного контракта', 
          answerOptions: [
   
              {answerText: 'Срочный служебный контракт на срок от одного года до трех лет заключается, если иной срок не установлен настоящим Федеральным законом.', isCorrect: false},
              {answerText: 'Срочный служебный контракт на срок до трех лет ', isCorrect: false},
              {answerText: 'Срочный служебный контракт на срок от одного года до пяти лет заключается, если иной срок не установлен настоящим Федеральным законом.', isCorrect: true} 
          ]
      }
      , 
      {//23
          
          questionText: 'Включение граждан в кадровый резерв государственного органа производится…', 
          answerOptions: [
   
              {answerText: 'По результатам конкурса на замещение вакантной должности или конкурса на включение в кадровый резерв', isCorrect: true},
              {answerText: 'по результатам аттестации, конкурса на замещение вакантной должности или конкурса на включение в кадровый резерв', isCorrect: false},
              {answerText: 'Только по результатам конкурса на включение в кадровый резерв', isCorrect: false} 
          ]
      }, 
      {//21
          
          questionText: 'Какой документ оформляется с гражданским служащим для замещения должности гражданской службы ', 
          answerOptions: [
   
              {answerText: 'служебный контракт на неопределенный срок или срочный служебный контракт.', isCorrect: true},
              {answerText: 'трудовой договор или срочный служебный контракт.', isCorrect: false},
              {answerText: 'служебный контракт на неопределенный срок.', isCorrect: false} 
          ]
      }
    
     
  ]
}, 
  
{                  //четвертый элемент
  id: 4, 
  quizName: 'Обратная связь', 
  author: 'Denis', 
  quizDescription: ' ', 
  time: 1, 
  questions:[
    {//21
          
      questionText: 'Как оцените приложение?', 
      answerOptions: [

          {answerText: 'Приложение супер', isCorrect: true},
          {answerText: 'Кайфово, отлично, хорошо', isCorrect:  true},
          {answerText: 'Потрясающе', isCorrect:  true} 
      ]
  }
   
  ]
}
 

]
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

 
