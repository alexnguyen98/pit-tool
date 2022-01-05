import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { UrlObject } from 'url';

type Variant = 'default' | 'primary';

type Props = {
  disabled?: boolean;
  className?: string;
  variant?: Variant;
  href?: UrlObject | string;
  onClick?: () => any;
};

const Button: React.FC<Props> = ({ className = '', variant = 'default', children, disabled, href, onClick }) => {
  const btnClassName = cn(
    'shadow text-center rounded-lg py-2 px-4 text-md font-bold border-b-4 border-2',
    {
      'opacity-50': disabled,
      'bg-primary hover:bg-accent-1 border-accent-2 text-accent-5': variant === 'default',
      'bg-blue-500 hover:bg-blue-400 border-blue-600 text-white': variant === 'primary',
    },
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={btnClassName}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={btnClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
