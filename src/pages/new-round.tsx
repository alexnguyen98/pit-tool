import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useGlobalContext } from '../context/ManagedContext';

const NewRound: React.FC = () => {
  const { resetStats } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('saved_data_quiz');
    resetStats();
    router.push('/round');
  }, []);

  return <div className="text-center mt-2">Creating new game...</div>;
};

export default NewRound;
