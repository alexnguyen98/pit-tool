import React from 'react';
import Layout from '../components/containers/Layout';
import Input from '../components/common/Input';
import { MAX_QUESTIONS } from '../constants/questions';
import { useGlobalContext } from '../context/ManagedContext';

const Settings: React.FC = () => {
  const { maxQuestions, setMaxQuestions } = useGlobalContext();

  const handleMax = (e: any) => {
    const num: number = e.target.value;
    if (10 < num && num < MAX_QUESTIONS) {
      alert(`Length cannot be smaller then 10 and bigger then ${MAX_QUESTIONS}!`);
    } else {
      setMaxQuestions(num);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl text-accent-6 font-bold text-center mb-4">Settings</h1>
      <div className="mx-auto mt-10 w-full md:w-96">
        <div className="text-sm mb-2 font-bold">QUESTIONS LENGTH</div>
        <Input className="w-20" type="number" min={10} max={MAX_QUESTIONS} value={maxQuestions} onChange={handleMax} />
      </div>
    </Layout>
  );
};

export default Settings;
