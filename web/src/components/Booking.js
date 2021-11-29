import React, { useState, useEffect } from 'react';
import StripeContainer from './StripeContainer';

function Booking(props) {
  const [showItem, setShowItem] = useState();
  const [type, setType] = useState(20);
  const [length, setLength] = useState(1);
  const [amount, setAmount] = useState(20);

  useEffect(() => {
    changeAmount();
  });

  function changeType(e) {
    setType(e.target.value);
  }

  function changeLength(e) {
    setLength(e.target.value);
  }

  function changeAmount() {
    setAmount(length * type);
  }

  function handleClick() {
    setShowItem(!showItem);
  }

  return (
    <React.Fragment>
      <div className='inputs'>
        <label htmlFor='type'></label>
        <select onChange={changeType} name='type' id='type'>
          <option value='20'>One-on-one</option>
          <option value='100'>Group Session</option>
        </select>
        <select onChange={changeLength} name='' id=''>
          <option value='1'>1 hour</option>
          <option value='2'>2 hours</option>
          <option value='3'>3 hours</option>
        </select>
        <button onClick={handleClick}>Book</button>
      </div>

      <p>{type * length}</p>

      <div>{showItem ? <StripeContainer amount={amount} /> : <p></p>}</div>
    </React.Fragment>
  );
}

export default Booking;
