import React, { useState } from 'react';
import "./style.css"
const App = () => {
  const [isteacher, setIsteacher] = useState(false);
  const [isOver25, setIsOver25] = useState(false);

  return (
    <div className='checboxclick'>
      <h1>assessment</h1>

      <form>
        <label>
          Are you a teacher?
          <input
            type="checkbox"
            checked={isteacher}
            onChange={() => setIsteacher(!isteacher)}
          />
        </label>
        <br />

        <label>
          Are you over 25?
          <input
            type="checkbox"
            checked={isOver25}
            onChange={() => setIsOver25(!isOver25)}
          />
        </label>
      </form>

      <h2>Are you a teacher: {isteacher ? 'Yes' : 'No'}</h2>
      <h2>Are you over 25: {isOver25 ? 'Yes' : 'No'}</h2>
    </div>
  );
};

export default App;
