'use strict';

function ClickableButton() {

  const [clicked, setClick] = React.useState(false);

  
  if (clicked) {
    return 'Hello World';
  }

  return React.createElement(
    'button', {
    style: {
      backgroundColor: "#3392e4",
      color: "#fff",
      border: "0",
      padding: "10px 20px",
      fontWeight: "bold",
      borderRadius: "5px",
      fontSize: "1.1em"
    },
    onClick: () => setClick(true)
  },
    'Press Here'
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(ClickableButton));