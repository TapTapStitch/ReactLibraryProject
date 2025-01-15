import React from 'react';
import Button from './components/Button/Button';

const App = () => (
  <div>
    <h1>Моя веб-библиотека компонентов</h1>
    <Button label="Нажми меня" onClick={() => alert('Кнопка нажата!')} />
  </div>
);

export default App;