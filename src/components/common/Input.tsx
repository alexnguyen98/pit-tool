import React from 'react';
import cn from 'classnames';

type Props = {
  type?: 'number' | 'email';
  max?: number;
  min?: number;
  className?: string;
  value?: string;
  onChange?: (e: any) => void;
};

const Input: React.FC<Props> = ({ className, ...props }) => (
  <input
    className={cn('shadow text-center rounded-lg py-2 px-3 text-md font-bold border-2 bg-primary border-accent-2 text-accent-5', className)}
    {...props}
  />
);

export default Input;
