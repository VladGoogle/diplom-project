import './style.css';
import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="goods__counter">
      <div className="goods__counter-add" onClick={plus}>
        <svg
          alt="add"
          className="goods__counter-add--icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#050630" />
        </svg>
      </div>
      <div className="goods__counter-number">{count}</div>
      <div className="goods__counter-remove" onClick={minus}>
        <svg
          alt="remove"
          className="goods__counter-remove--icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 12.998H5V10.998H19V12.998Z" fill="#050630" />
        </svg>
      </div>
    </div>
  );
};

export default Counter;
