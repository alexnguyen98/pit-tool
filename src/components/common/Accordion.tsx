import React, { useRef, useState } from 'react';
import cn from 'classnames';
import Plus from '../icons/Plus';

type Props = {
  className?: string;
  header: string;
};

const Accordion: React.FC<Props> = ({ className, header, children }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const handleToggle = () => setActive((state) => !state);

  return (
    <div className={cn('py-3 w-full md:w-120 border-2 rounded-lg border-accent-2 px-5', className)}>
      <button onClick={handleToggle} className="flex items-center w-full">
        <Plus className="w-6 mr-3 fill-current" filled={active} />
        <h2 className="text-left text-xl font-bold">{header}</h2>
      </button>
      <div
        ref={ref}
        style={{
          maxHeight: active ? `${(ref.current as any).scrollHeight}px` : '0px',
        }}
        className="overflow-auto transition-max-height duration-300 ease-in-out"
      >
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
