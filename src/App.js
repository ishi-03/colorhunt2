import React from 'react';
import ColorHunt from './ColorHunt';
import Provider from './context/Provider';
export default function App() {
  console.log("hi");
  return (
    <Provider>
            <ColorHunt/>
    </Provider>
    
  )
}
