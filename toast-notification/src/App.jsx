import Toast from "./Toast/Toast";
import './App.css';
import { useState } from "react";

function App() {

  const [toasts, setToasts] = useState([]);

  const showToast = (message, type) => {
    setToasts(toasts => [...toasts, {
      message,
      type
    }]);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const type = e.target.className.split('-')[0];
    showToast(`This is ${type} message`, type);
  }

  return (
    <>
      <div className="Wrapper">
        <button className="success-btn" onClick={handleClick}>Success</button>
        <button className="info-btn" onClick={handleClick}>Info</button>
        <button className="warning-btn" onClick={handleClick}>Warning</button>
        <button className="error-btn" onClick={handleClick}>Error</button>
      </div>
      <div className="toasts">
        {setToasts && toasts.map((toast, index) => {
          return <Toast toast={toast} key={index} />
        }).reverse()
        }
      </div>
    </>
  )
}

export default App