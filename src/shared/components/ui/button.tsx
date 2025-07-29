import styles from './button.module.css';

import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={classNames(className, styles['am-button'])} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
