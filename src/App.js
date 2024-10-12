import {React,useState} from 'react';
import './App.css';
import Card from './components/card';
import DetailsCard from './components/details';
import {inputsForSignupDetailsCard,inputsForLoginDetailsCard } from "./components/prop";
import {inputsForLoginCard,inputsForSignupCard,loginButton,signupButton} from './components/prop'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isToggle, setIsToggle] =useState(false)
  const [clipPath, setClipPath] = useState('polygon(35% 0, 100% 0, 100% 100%, 80% 100%, 35% 0%)');
  function logInAnimation(){
    setIsActive(false)
    setIsToggle(true)

  }
  function signUpAnimation() {
    setIsToggle(false)
    setIsActive(true);

  }
  function polygonState(){
    if (isActive) {
      setClipPath('polygon(0 0, 70% 0, 70% 0, 20% 100%,0% 100%)');
    } else if (isToggle) {
      setClipPath('polygon(35% 0, 100% 0, 100% 100%, 80% 100%, 35% 0%)');
    }
  }
  return (
    <div className="App">
       <div 
        className={`polygon-background ${isActive ? 'active' : ''}${isToggle ? 'toggle' : ''}`} 
        style={{ clipPath: clipPath }} 
        onAnimationEnd={polygonState}>
      </div>
      <div className="container">
        <div className={`login_card_container ${isActive ? 'active' : ''}${isToggle ? 'toggle' : ''}`}>
          <Card 
            title="Log-In" 
            id="login_card"
            inputs={inputsForLoginCard}
            button={loginButton}
            isActive={isActive}
            isToggle={isToggle}
          />  
          <DetailsCard 
            animation={logInAnimation}
            {...inputsForLoginDetailsCard}
            isActive={isActive}
            isToggle={isToggle}
          />
        </div>
        <div className={`sign_up_card_container ${isActive ? 'active' : ''}${isToggle ? 'toggle' : ''}`}>
          <DetailsCard 
            toggleBackground={signUpAnimation}
            {...inputsForSignupDetailsCard}
            isActive={isActive}
            isToggle={isToggle}
          />
          <Card 
            title="Create Account" 
            id="Sign_up_card"
            inputs={inputsForSignupCard}
            button={signupButton}
            isActive={isActive}
            isToggle={isToggle}
          />  
        </div>
      </div>
    </div>
  );
}

export default App;
