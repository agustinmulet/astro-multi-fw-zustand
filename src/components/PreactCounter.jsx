import { useState } from 'preact/hooks';
// Also tried something like this but it doesn't work
import React from 'preact/compat';
import create from 'zustand';
import { store } from '../store';

export default function PreactCounter() {
  const useStore = create(store);
  const { getState } = useStore;
  
  /**
   *  If I try to do this React-style, I get this error:
   *  "Uncaught Error: Expected ref to be a function, a string,
   *  an object returned by React.createRef(), or null."
   */
  // const bears = useStore(state => state.bears);
  

  return (
    <div id="preact" class="counter">
      {/* This button works */}
      <button onClick={getState().increasePopulation}>one up</button>
      {/* But this is not getting updated :( */}
      <h1>{getState().bears}</h1>
    </div>
  );
}
