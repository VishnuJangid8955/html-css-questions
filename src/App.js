import { useState } from "react";
import "./App.css";
// import Modal from "./components/Modal";
import ModalAbsolute from "./components/ModalAbsolute";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <ModalAbsolute />}
      <div className="App">
        {/* {show && <Modal />} */}
        <button onClick={() => setShow(!show)}>Show Modal</button>
      </div>
    </>
  );
}

export default App;
