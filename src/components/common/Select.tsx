import React from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  options: any[];
  value: any;
  onChange?: (e: any) => void;
};

const Select: React.FC<Props> = ({ className, options, ...props }) => (
  <select
    className={cn('shadow text-center rounded-lg py-2 px-3 text-md font-bold border-2 bg-primary border-accent-2 text-accent-5', className)}
    {...props}
  >
    {options.map((i) => (
      <option key={i}>{i}</option>
    ))}
  </select>
);

export default Select;
