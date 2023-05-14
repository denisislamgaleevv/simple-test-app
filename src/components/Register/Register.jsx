  
import './Register.css';
import {React, useState} from 'react'; 
import axios from 'axios';
import validator from 'validator';
//import { DOMEN_SERVER, DOMEN_SITE } from '../../config/const';
export function Register() {
  
  const [regVisibility, setRegVisibility] = useState(true)
  return (
    <> 
     {regVisibility? 
    <div className="Register">
       <h3>Регистрация</h3>
       <input 
            className='inputReg'
            type ='text'
            placeholder = 'Логин'
        /> 
         <input 
            className='inputReg'
            type ='email'
            placeholder = 'email'
        /> 
       <input 
            className='inputReg'
            type ='password'
            placeholder = 'Пароль'
        /> 
         <input 
            className='inputReg'
            type ='password'
            placeholder = 'Повторите пароль'
        /> 
    <div className='buttonContainer'> 
      <button className='button'  >Зарегистрироваться</button>
      </div>
      <p>Уже зарегистрированы? 
        <span className='entranceSpan'
        onClick={ () => setRegVisibility(false)}
        > Войти</span></p>
    </div>:
     <div className="Register">
     <h3>Вход</h3>
     <input 
          className='inputReg'
          type ='text'
          placeholder = 'Логин'
      /> 
     <input 
          className='inputReg'
          type ='password'
          placeholder = 'Пароль'
      /> 
    <div className='buttonContainer'> 
      <button className='button'  >Войти</button>
      </div>
    <p> 
      <span className='entranceSpan'
      onClick={ () => setRegVisibility(true)}
      >Назад </span></p>
  </div>
    }
    </>
  );
}
 
