import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Kittens from "./components/Kittens";
import Puppies from "./components/Puppies";
import Ducklings from "./components/Ducklings";
import AboutUs from "./components/AboutUs";


export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link to="/">All Pets</Link></li>
        <li><Link to="/kittens"> Kittens </Link></li>
        <li><Link to="/puppies"> Puppies </Link></li>
        <li><Link to="/ducklings"> Ducklings </Link></li>
        <li><Link to="/aboutus"> About Us </Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="kittens" element={<Kittens />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="ducklings" element={<Ducklings />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
  </Router>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
