import { useState } from 'react';

function App() {
  const test: string = "test";

  const [message, setMessage] = useState<number>(0);

  const handleClick = () => {
    setMessage(message + 1);
    localStorage.setItem("num", setMessage.toString());
  };

  // UseEffect?

  return (
    <>
      <div>
        <form>
          <p id='test'>{}</p>
          <button type='button' onClick={handleClick}>
            Change Message
          </button>
        </form>
      </div>
    </>
  );
}

export default App;