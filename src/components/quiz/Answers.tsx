import cn from 'classnames';
import React from 'react';
import { QuestionOptionT } from '../../types';

type Props = {
  options: QuestionOptionT;
  score: number[];
  handleScore: (index: number) => void;
};

const Answers: React.FC<Props> = ({ options, score, handleScore }) => {
  return (
    <div>
      <ul>
        {options.map((i, index) => (
          <li key={index} className="text-sm border-t-2 border-accent-2 text-accent-6">
            <button
              className={cn('text-left py-4 px-3 w-full hover:bg-blue-200', {
                'bg-blue-100 text-blue-900 font-bold': score.includes(index),
              })}
              onClick={() => handleScore(index)}
            >
              {i.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
