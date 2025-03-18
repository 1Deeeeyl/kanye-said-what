import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Container from './components/container/container';

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
    <Container>
      <img
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-10/221019-kanye-west-se-218p-14e0cf.jpg"
        alt="Mr. West's picture."
        className='w-1/2'
      />
      <div className="bg-red-500 text-amber-300">
        {quote} <p>-Kanye</p>
      </div>
    </Container>
  );
}

export default App;
