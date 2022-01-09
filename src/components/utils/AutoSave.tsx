import React, { useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useGlobalContext } from '../../context/ManagedContext';

const AutoSave: React.FC = () => {
  const { subjectType, finished, activeIndex, maxQuestions, savedQuestions, frequencies, scores, setData } = useGlobalContext();
  const debouncedInput = useDebounce(JSON.stringify({ subjectType, finished, activeIndex, savedQuestions, frequencies, scores }), 1000);

  useEffect(() => {
    const loadData = () => {
      const data = localStorage.getItem('saved_data_quiz');
      if (data) {
        setData(JSON.parse(data));
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const data = JSON.stringify({
      loading: false,
      subjectType,
      finished,
      activeIndex,
      savedQuestions,
      maxQuestions,
      frequencies,
      scores,
    });
    localStorage.setItem('saved_data_quiz', data);
  }, [debouncedInput]);

  return null;
};

export default AutoSave;
