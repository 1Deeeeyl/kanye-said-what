import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Container from './components/container/container';

function App() {
  const [quote, setQuote] = useState('');
  const fetchData = async () => {
    const response = await fetch('https://api.kanye.rest/');
    const data = await response.json();
    setQuote(data.quote);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <div className="min-h-130 flex flex-col items-center md:items-stretch md:flex-row">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-10/221019-kanye-west-se-218p-14e0cf.jpg"
          alt="Mr. West's picture."
          className="w-full md:w-1/2 object-cover min-h-full"
        />
        <div className="w-full md:w-1/2 bg-white text-black flex flex-col md:w-1/2 p-10 justify-center items-center font-big-shoulders text-3xl">
          <div className="flex flex-col max-w-3/4">
            <span className='text-7xl'>"</span>
            <p className='font-semibold'>{quote}</p>
            <span className="self-end text-7xl mt-7">"</span>
            <span className="self-end text-2xl">- Kanye West</span>
          </div>
        </div>
      </div>
      <button
        className="bg-white inline w-fit px-5 py-3 cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-300 rounded-md hover:font-semibold hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
        onClick={fetchData}
      >
        KANYE ALSO SAID
      </button>
    </Container>
  );
}

export default App;


// adjust height 