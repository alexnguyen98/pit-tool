import cn from 'classnames';
import React from 'react';
import { QuestionOptionT, QuestionType } from '../../types';
import Input from '../common/Input';

type Props = {
  type: QuestionType;
  options: QuestionOptionT;
  score: number[] | string;
  handleScoreQuestion: (index: number) => void;
  handleScoreOpen: (text: string) => void;
};

const Answers: React.FC<Props> = ({ type, options, score, handleScoreQuestion, handleScoreOpen }) => {
  return (
    <div>
      {type === QuestionType.OPEN && (
        <div className="p-3 flex justify-center">
          <Input
            placeholder="Your answer"
            value={score as string}
            onChange={(e) => {
              e.stopPropagation();
              handleScoreOpen(e.target.value);
            }}
          />
        </div>
      )}
      {type === QuestionType.QUESTION && (
        <ul className="divide-y-2 divide-accent-2">
          {options.map((i, index) => (
            <li key={index} className="text-sm text-accent-6">
              <button
                className={cn('text-left py-4 px-3 w-full md:hover:bg-blue-200', {
                  'bg-blue-100 text-blue-900 font-bold': (score as number[]).includes(index),
                })}
                onClick={() => handleScoreQuestion(index)}
              >
                {i.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Answers;
