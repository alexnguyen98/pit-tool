import React, { useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useGlobalContext } from '../../context/ManagedContext';

const AutoSave: React.FC = () => {
  const { setData, finished, activeIndex, savedQuestions, scores } = useGlobalContext();
  const debouncedInput = useDebounce(JSON.stringify({ finished, activeIndex, savedQuestions, scores }), 1000);

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('saved_data_pit');
      if (data) {
        setData(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const data = JSON.stringify({
      finished,
      activeIndex,
      savedQuestions,
      scores,
    });
    localStorage.setItem('saved_data_pit', data);
  }, [debouncedInput]);

  return null;
};

export default AutoSave;
