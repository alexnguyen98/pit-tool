import React from 'react';

type Props = {
  title: string;
};

const Questions: React.FC<Props> = ({ title }) => {
  return (
    <div className="px-4 py-6">
      <div className="text-xl text-accent-6 font-bold">{title}</div>
    </div>
  );
};

export default Questions;
