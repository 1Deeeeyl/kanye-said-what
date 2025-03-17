import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.kanye.rest/');
      const data = await response.json();
      setQuote(data.quote);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>{quote}</div>
    </>
  );
}

export default App;
