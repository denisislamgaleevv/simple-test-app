  
import './Main.css';
import emailjs from '@emailjs/browser'
import React, {useRef, useEffect} from 'react';
export function Main() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ipudk14', 'template_idardar', form.current, 'dPA0Yw_izkx2sCObB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="Main">
       <div className='mainTextContainer'> 
       <h2>Добро пожаловать на наше веб-приложение<br/>с тестами на любой вкус!</h2>

      <form ref = {form} className='emailContainer' onSubmit={sendEmail}>  
       <input type = 'email' name = 'user_email' className='inputReg' placeholder='Ваш email' required/>
       <button className='button'>Оставить нам свою почту</button>
       </form>
       </div>
       
       <img  className = 'mainImg' src='https://cdn-user84060.skyeng.ru/uploads/6262e1508a0d5148237423.png'/>
    </div>
  );
}
 
