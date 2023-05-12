import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import carparking from "./carparkingmit.png"

const App = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'input1':
        setInput1(value);
        break;
      case 'input2':
        setInput2(value);
        break;
      case 'input3':
        setInput3(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any desired action with the form data
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);

    // Clear form inputs
    setInput1('');
    setInput2('');
    setInput3('');

    // Show toast notification
    toast('🚗   Car Parked |  🎫  Ticket Sent!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className={`container ${formVisible ? 'expanded' : ''}`}>
      <img src={carparking} alt=" "/>
      <button onClick={toggleFormVisibility} className="toggle-btn">
        {formVisible ? '' : 'Confirm Spot '}
      </button>
      

      <form
        onSubmit={handleSubmit}
        className={`form ${formVisible ? 'visible' : ''}`}
      >
        <label htmlFor="input1" className="label">
        📛 Your Name 📛
        </label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={input1}
          onChange={handleInputChange}
          className="input"
        />

        <label htmlFor="input2" className="label">
         📱 Your Phone Number 📱
        </label>
        <input
          type="text"
          id="input2"
          name="input2"
          value={input2}
          onChange={handleInputChange}
          className="input"
        />

        {/* <label htmlFor="input3" className="label">
          Your Car Number
        </label>
        <input
          type="text"
          id="input3"
          name="input3"
          value={input3}
          onChange={handleInputChange}
          className="input"
        /> */}

        <button type="submit" className="submit-btn">
         Confirm Parking
        </button>
      </form>
       
        {!formVisible&&<h3>Made For IOT Mini Project 😇</h3>}
      

      <ToastContainer toastStyle={{ backgroundColor: "ff82b7" }} />
    </div>
  );
};

export default App;
