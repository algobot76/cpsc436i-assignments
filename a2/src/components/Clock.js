import React, { useState, useEffect } from 'react';

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
      <h2>It is {getTime(date)}</h2>
    </div>
  );
}

export default Clock;
