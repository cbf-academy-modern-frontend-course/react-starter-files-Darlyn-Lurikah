import React from 'react';



const GadgetList = (props) => {

  const headphonesStyle = {"fontWeight": "bold"}
  const priceStyle = {"color": "red"};

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (<div key={item.key}><img scr={item.src} alt={item.title}></img><div style={headphonesStyle}>{item.title}
        <div style={priceStyle}>£{item.price}</div><hr></hr></div>
        <div>
        
        </div>
        </div> ))}
    </main>
  );
}

export default GadgetList;
