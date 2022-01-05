import React, { useEffect } from 'react';
import Layout from '../components/containers/Layout';
import Button from '../components/common/Button';
import Answers from '../components/quiz/Answers';
import Questions from '../components/quiz/Questions';
import { QUESTIONS } from '../constants/questions';
import { useGlobalContext } from '../context/ManagedContext';
import { useRouter } from 'next/dist/client/router';

const Round: React.FC = () => {
  const {
    activeIndex,
    finished,
    frequencies,
    scores,
    savedQuestions,
    maxQuestions,
    setQuestions,
    setScore,
    setActiveIndex,
    finishGame,
  } = useGlobalContext();
  const router = useRouter();

  const activeQ = QUESTIONS[activeIndex];
  const score = scores[activeIndex] ?? [];
  const isFirst = !activeIndex;
  const isLast = activeIndex === maxQuestions - 1;
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
      const shuffled = QUESTIONS.sort(() => 0.5 - Math.random()).sort((a, b) => {
        const weightA = frequencies.includes(a.id) ? 1 : 0;
        const weightB = frequencies.includes(b.id) ? 1 : 0;
        return Math.random() * (weightB + weightA) - weightA;
      });
      const sliced = shuffled.slice(0, maxQuestions);
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
      <div className="mx-auto w-full md:w-auto max-w-lg pt-5 pb-20">
        <div className="text-center text-xs text-blue-500 font-bold">
          Question {activeIndex + 1}/{maxQuestions}{' '}
        </div>
        <Questions title={activeQ.question} />
        <div className="flex flex-col w-full md:w-160 border-2 border-accent-2 overflow-hidden rounded-lg">
          <Answers options={activeQ.options} score={score} handleScore={handleScore} />
        </div>
        <div className="p-4 fixed left-0 right-0 bottom-0 z-10 bg-primary">
          <div className="w-full md:w-160 mx-auto flex justify-between">
            <Button onClick={handlePrev} disabled={isFirst} className="w-32">
              Prev
            </Button>
            {isLast ? (
              <Button onClick={handleFinish} variant="primary" className="w-32">
                Finish
              </Button>
            ) : (
              <Button onClick={handleNext} className="w-32">
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Round;
