import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';

export default function TopJumper() {
  const [show, switchShow] = useState(false);
  useEffect(() => {
    const listener = createThrottle(() => {
      const shouldShow = window.scrollY > 200;
      if (shouldShow !== show) {
        switchShow(shouldShow);
      }
    }, 100);
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, [show]);

  return (
    show && (
      <button
        className="bg-slate-700 hover:bg-slate-500 text-gray-200 rounded fixed bottom-16 right-1 z-10 mb-3"
        onClick={() => window.scrollTo(0, 0)}
        id="myBtn"
      >
        <ArrowUp size="35" />
      </button>
    )
  );
}

const createThrottle = (callback, delay = 200, thisArg) => {
  let lastInvokeTime = Date.now();
  const _delay = Number(delay) || 200;
  return (...args) => {
    const now = Date.now();
    if (now - _delay <= lastInvokeTime) {
      return;
    }
    lastInvokeTime = now;
    callback.call(thisArg, ...args);
  };
};
