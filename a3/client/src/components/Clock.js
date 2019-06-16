import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  function tick() {
    setDate(new Date());
  }

  function getTime(date) {
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

  return (
    <div>
      <h2 className="clock__text">It is {getTime(date)}</h2>
    </div>
  );
}

export default Clock;
