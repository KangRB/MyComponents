import React, { useState, useEffect, useRef, useCallback } from 'react';

function useDebounce(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(
    function () {
      current.fn = fn;
    },
    [fn]
  );

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
}

export default function () {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = useDebounce(function () {
    console.count('click1');
    setCounter1(counter1 + 1);
  }, 500);

  useEffect(function () {
    const t = setInterval(() => {
      setCounter2((x) => x + 1);
    }, 500);
    return clearInterval.bind(undefined, t);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <button
        onClick={function () {
          handleClick();
        }}
      >
        click
      </button>
      <div>{counter1}</div>
      <div>{counter2}</div>
    </div>
  );
}
