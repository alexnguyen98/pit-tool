import cn from 'classnames';
import React from 'react';
import { QuestionOptionT, QuestionType } from '../../types';

type Props = {
  type: QuestionType;
  options: QuestionOptionT;
  score: number[] | string;
};

const AnswersResults: React.FC<Props> = ({ type, options, score }) => {
  return (
    <div className="text-sm">
      {type === QuestionType.OPEN && (
        <div
          className={cn('text-left py-4 px-3 w-full', {
            'bg-red-100 text-red-900': (score as string) === '' || !options[0].text.includes(score as string),
            'bg-green-100 text-green-700 font-bold': (score as string) !== '' && options[0].text.includes(score as string),
            'text-red-700 font-bold': !options[0].text.includes(score as string),
          })}
        >
          <div>Correct answer: {options[0].text}</div>
          {score && <div>Your answer: {score}</div>}
        </div>
      )}
      {type === QuestionType.QUESTION && (
        <ul className="divide-y-2 divide-accent-2">
          {options.map((i, index) => (
            <li key={index}>
              <div
                className={cn('text-left py-4 px-3 w-full', {
                  'bg-red-100 text-red-900': i.correct && !(score as number[]).includes(index),
                  'bg-green-100 text-green-700 font-bold': i.correct && (score as number[]).includes(index),
                  'text-red-700 font-bold': !i.correct && (score as number[]).includes(index),
                })}
              >
                {i.text}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnswersResults;
