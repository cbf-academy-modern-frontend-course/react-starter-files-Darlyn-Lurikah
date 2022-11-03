import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Darlyn';
const lowerName = name.toLowerCase();

function Profile(name){
  
  if (lowerName === ('Darlyn'.toLowerCase())) {
    
    return <main id="content" role="main" className="base">
            <h1>{name}'s React Page</h1>
              <p>Example of react JSX in action</p>
            </main>
  } else {
    return <main id="content" role="main" className="base">
            <h1>Just a React Page</h1>
            </main>
  }
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));

