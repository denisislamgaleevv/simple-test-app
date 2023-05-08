import FaceIcon from '@mui/icons-material/Face';
import SavingsIcon from '@mui/icons-material/Savings';
import './Header.css';

export function Header( ) {
  return (
  <div className="header">
    <a href="/" className="logo">SmartTest</a>
        <a href="/test">Тесты</a>
        <a>Статистика</a> 
        <a  href="/register" >Регистрация</a>
          <div className="header-right">
        <FaceIcon/><span className = 'name'>  Денис И.</span><br/>
        <SavingsIcon/><span className = 'points'> 1000 очков</span>     
    </div>
  </div>
  );
}
 






