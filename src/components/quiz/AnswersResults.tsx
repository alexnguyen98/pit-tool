import cn from 'classnames';
import React from 'react';
import { QuestionOptionT } from '../../types';

type Props = {
  options: QuestionOptionT;
  score: number[];
};

const AnswersResults: React.FC<Props> = ({ options, score }) => {
  return (
    <div>
      <ul className="divide-y-2 divide-accent-2">
        {options.map((i, index) => (
          <li key={index} className="text-sm">
            <div
              className={cn('text-left py-4 px-3 w-full', {
                'bg-red-100 text-red-900': i.correct && !score.includes(index),
                'bg-green-100 text-green-700 font-bold': i.correct && score.includes(index),
                'text-red-700 font-bold': !i.correct && score.includes(index),
              })}
            >
              {i.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersResults;
