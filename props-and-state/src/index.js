import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
//import data from './models/headphones.json';

import GadgetList from './components/GadgetList';
const mainStyle = {"fontFamily":"Arial"};
const storeTitle = {"fontSize": "xx-large"}

const App = () => {
  const headphones =  [{"id":1, "title":"Headphones 1", "price": 255.99},{"id":2,"title":"Headphones 2", "price": 305.00},{"id":3,"title":"Headphones 3", "price": 170.00},{"id":4,"title":"Headphones 4", "price": 205.99},{"id":5,"title":"Headphones 5", "price": 384.99}];
  const [headphonesList] = useState(headphones);

  return <section style={mainStyle}>
    <h1 style={storeTitle}>Electronics Store</h1>
    <GadgetList items={headphonesList}/>
  </section>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
