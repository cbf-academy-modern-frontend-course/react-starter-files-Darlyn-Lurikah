import React from 'react';
import { useState } from 'react';


const Greetings = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    const submitGreeting = (event) => {
        event.preventDefault();
        alert(`Hi ${name}! Here's a bit about you: ${bio}`)
    }
   return <main id="content" role="main" className="base"> 
        <form onSubmit={submitGreeting}>
        <div>   
        <label>Enter your name:
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        </div> 
        <div> 
        <label>Enter a bio:
            <input 
            type="text" 
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
        </label>
        </div>
        <div>
            <input type="submit" />
        </div>
        
        </form>
        
    </main> 


}
    
export default Greetings;