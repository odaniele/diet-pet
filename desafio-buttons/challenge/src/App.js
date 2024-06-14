import React, { useState } from 'react';
import Button from './components/Button.jsx';

const App = () => {
  const [buttonState, setButtonState] = useState('normal');
  const [isButtonActive, setButtonActive] = useState(false);
  const [isButtonSelect, setButtonSelect] = useState(false);
  
const handleButtonClick = () => {
    if (buttonState === 'normal' && isButtonActive){
      setButtonState('loading');
      setTimeout(() => {
        setButtonState('normal');
      }, 2000);
    }
};

const handleButton1Click = () => {
    setButtonActive(!isButtonActive);
};

const handleButton2Click = () => {
  if (!isButtonActive) {
      setButtonSelect(!isButtonSelect);
  if (isButtonSelect){

  }
  }
}
  return (
    <div className='App'>

    <div className='Header'>
      <h1>Meu App</h1>
    </div>

    <div className='Buttons'>
      <Button value = 'Clique Aqui' onChange={handleButtonClick} buttonState={buttonState}
      disabled={isButtonActive || isButtonSelect} className={buttonState ==='loading' ? 'loading-button' : 'normal-button'}/>
    
      <button onClick={handleButton1Click} className={isButtonActive? 'active-button' : 'inactive-button'}> 
      {isButtonActive? 'Botão Habilitado' : 'Habilitar Botão'}
      </button>

      <button onClick={handleButton2Click} disabled={isButtonActive} className={isButtonSelect? 'select-button' : 'deselect-button'}>
      {isButtonSelect? 'Desselecionar Botão' : 'Selecionar Botão'}  
      </button>
    </div>

</div>)}

export default App;