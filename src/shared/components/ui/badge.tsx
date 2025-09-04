import classNames from 'classnames';

type BadgeVariant = 'gray' | 'blue' | 'red' | 'green';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: BadgeVariant;
}

const variants = {
  gray: 'bg-gray-100',
  blue: 'bg-blue-100',
  red: 'bg-red-100',
  green: 'bg-green-100',
};

export default function Badge({ children, variant = 'gray' }: BadgeProps) {
  return (
    <span className={classNames('inline-block w-fit rounded-full px-2 py-1 text-xs text-gray-500', variants[variant])}>
      {children}
    </span>
  );
}

export type { BadgeVariant };
