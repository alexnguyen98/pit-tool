import React from 'react';
import { QuestionT } from '../../types';

type Props = {
  data: QuestionT;
};

const Questions: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-3 py-5">
      {data.question && <div className="text-xl text-accent-6 font-bold">{data.question}</div>}
      {data.img && <img className="mx-auto mt-2 border-2 rounded-lg" src={data.img} alt="question" />}
    </div>
  );
};

export default Questions;
