  
import './Register.css';

export function Register() {
  return (
    <div className="Register">
       <h3>Регистрация</h3>
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
      <button className='button'  >Зарегистрироваться</button>
      </div>
    </div>
  );
}
 
