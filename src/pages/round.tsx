import React, { useEffect } from 'react';
import Layout from '../components/containers/Layout';
import Button from '../components/common/Button';
import Answers from '../components/quiz/Answers';
import Questions from '../components/quiz/Questions';
import { MAX_QUESTIONS, QUESTIONS } from '../constants/questions';
import { useGlobalContext } from '../context/ManagedContext';
import { useRouter } from 'next/dist/client/router';

const Round: React.FC = () => {
  const { activeIndex, finished, scores, savedQuestions, setQuestions, setScore, setActiveIndex, finishGame } = useGlobalContext();
  const router = useRouter();

  const activeQ = QUESTIONS[activeIndex];
  const score = scores[activeIndex] ?? [];
  const isFirst = !activeIndex;
  const isLast = activeIndex === MAX_QUESTIONS - 1;
  const isEmpty = !savedQuestions.length;

  const handleScore = (index: number) => {
    setScore({ [activeIndex]: score.includes(index) ? score.filter((i: number) => i !== index) : [...score, index] });
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handleFinish = () => {
    finishGame();
    router.push('/finish');
  };

  useEffect(() => {
    if (finished) {
      router.push('/finish');
    } else if (!finished && isEmpty && !savedQuestions.length) {
      const shuffled = QUESTIONS.sort(() => 0.5 - Math.random());
      const sliced = shuffled.slice(0, MAX_QUESTIONS);
      sliced.forEach((i) => i.options.sort(() => 0.5 - Math.random()));
      setQuestions(sliced);
    }
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && !isFirst) {
        handlePrev();
      }
      if (event.key === 'ArrowRight' && !isLast) {
        handleNext();
      }
    };
    document.addEventListener('keyup', handleKey);
    return () => document.removeEventListener('keyup', handleKey);
  }, [isFirst, isLast, activeIndex]);

  if (isEmpty) return <div className="text-center mt-2">loading...</div>;

  return (
    <Layout>
      <div className="m-auto">
        <div className="text-center text-xs py-2 text-blue-500 font-bold">Question {activeIndex + 1}/25 </div>
        <div className="flex flex-col w-full md:w-160 border-2 border-accent-2 rounded-lg">
          <Questions title={activeQ.question} />
          <Answers options={activeQ.options} score={score} handleScore={handleScore} />
        </div>
        <div className="mt-5 mb-20 flex justify-center space-x-5">
          <Button onClick={handlePrev} disabled={isFirst}>
            Prev
          </Button>
          {isLast ? (
            <Button onClick={handleFinish} variant="primary">
              Finish
            </Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Round;
