import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Modal />}
      <button>Show Modal</button>
    </div>
  );
}

export default App;
