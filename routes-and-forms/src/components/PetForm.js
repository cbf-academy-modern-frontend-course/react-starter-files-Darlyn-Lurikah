import React, { useState } from 'react';

const PetForm = () => {
  const [name, setName] = useState('');
  const [hasSubmitted ,setSubmitted] = useState(false);
  const [age, setAge] = useState(0);
  const [colors, setColors] = useState([]);


  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pet's Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <div>
          <label>Pet's Age:<input type="text" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <div>
          <label>Pet's Colors:<input type="text" value={colors} onChange={(e) => { setColors(e.target.value); setSubmitted(false) }} /></label>
        </div>
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      {hasSubmitted && (<div>Thank you for submitting</div>)}
      <div id="results">
        <h3>Results</h3>
            Name: {name}<br />
            Age: {age}<br />
            Colors: {colors}<br />
      </div>
    </div>
  );
}

export default PetForm;