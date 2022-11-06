import React from 'react';

const reactElement = (key, src, title, price, headphonesStyle, priceStyle) => {
  console.log(src)
  return (
    <div key={key}>
      <img src={src} alt={title}/>
      <div style={headphonesStyle}>{title}</div>
      <div style={priceStyle}>£{price}</div>
      <hr></hr>   
    </div>
  )
  
}
const GadgetList = (props) => {

  const headphonesStyle = {"fontWeight": "bold"}
  const priceStyle = {
    "color": "red",
    "fontWeight": "bold"
  };

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => reactElement(item.key, item.src, item.title, item.price, headphonesStyle, priceStyle) )}
    </main>
  );
}

export default GadgetList;
