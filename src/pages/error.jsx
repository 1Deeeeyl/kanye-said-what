import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/container/container';
import React from 'react';

const error = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Container>
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white gap-5">
          <img
            src='/images/angryKanye.png'
            alt="Angry Mr. West"
            className='w-fit'
          />
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-lg mt-2">
            Redirecting you back to the home page in&nbsp;
            <span className="font-bold">{countdown}</span> seconds...
          </p>
        </div>
    </Container>
  );
};

export default error;
