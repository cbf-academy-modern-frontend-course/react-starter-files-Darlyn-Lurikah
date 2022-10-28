import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom"



it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(<App />,root);
});
