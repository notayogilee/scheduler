import React, { useState } from 'react';

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial])

  function transition(mode, replace = false) {

    if (replace) {
      const newHistory = history.slice(0, history.length - 1);
      setMode(mode);
      setHistory([...newHistory, mode])

    } else {

      setMode(mode);
      setHistory([...history, mode]);
    }
  }

  function back() {
    if (mode === history[0]) {

      return setMode(mode);
    } else {

      const backHistory = history.slice(0, history.length - 1);

      setMode(backHistory[(backHistory.length - 1)]);
      setHistory([...backHistory]);
    }
  }

  return { mode, transition, back }
}

