import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useGlobalContext } from '../context/ManagedContext';
import { QuestionT } from '../types';
import Layout from '../components/containers/Layout';
import Button from '../components/common/Button';
import Questions from '../components/quiz/Questions';
import AnswersResults from '../components/quiz/AnswersResults';

const Finish: React.FC = () => {
  const { scores, finished, frequencies, setFrequencies, savedQuestions } = useGlobalContext();
  const router = useRouter();

  let correct = 0;
  let total = 20;
  let mistakes = 0;

  (savedQuestions as QuestionT[]).forEach((i, indexI) => {
    i.options.forEach((o, indexO) => {
      if (scores[indexI] && scores[indexI].includes(indexO)) {
        if (o.correct) {
          correct++;
        } else {
          mistakes++;
        }
      }
      if (o.correct) {
        total++;
      }
    });
  });

  const handleFrequency = (id: number) => {
    setFrequencies(frequencies.includes(id) ? frequencies.filter((i: number) => i !== id) : [...frequencies, id]);
  };

  useEffect(() => {
    if (!finished) {
      router.push('/');
    }
  }, []);

  return (
    <Layout>
      <div className="m-auto pb-20">
        <div className="flex flex-col w-full md:w-160">
          <h1 className="text-3xl text-accent-6 font-bold text-center mb-4">Final score</h1>
          <div className="border-2 border-accent-2 rounded-lg p-4 space-y-8 text-sm mb-10">
            <div className="flex flex-col items-center justify-center">
              <div>POINTS</div>
              <div className="text-3xl font-bold text-green-700">
                {correct}/{total}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>MISTAKES</div>
              <div className="text-3xl font-bold text-red-700">{mistakes}</div>
            </div>
          </div>
          {savedQuestions.map((i: QuestionT, index: number) => (
            <div key={index}>
              <Questions title={i.question} />
              <div className="border-2 border-accent-2 rounded-lg mb-5">
                <AnswersResults options={i.options} score={scores[index] ?? []} />
                <div className="flex justify-center py-2 border-t-2 border-accent-2">
                  <Button onClick={() => handleFrequency(i.id)}>
                    {frequencies.includes(i.id) ? '⬇️ Decrease frequency' : '⬆️ Increase frequency'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-4 fixed left-0 right-0 bottom-0 z-10 bg-primary">
          <Button
            className="w-full md:w-80 "
            variant="primary"
            href={{
              pathname: '/new-round',
              query: {
                type: 'new',
              },
            }}
          >
            New Round
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Finish;
