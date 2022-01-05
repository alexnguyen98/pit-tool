import React from 'react';

type Props = {
  title: string;
};

const Questions: React.FC<Props> = ({ title }) => {
  return (
    <div className="px-3 py-5">
      <div className="text-xl text-accent-6 font-bold">{title}</div>
    </div>
  );
};

export default Questions;
