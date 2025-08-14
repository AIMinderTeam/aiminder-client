import styles from './switch.module.css';

import React, { useEffect, useState } from 'react';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  id?: string;
  className?: string;
}

export default function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'medium',
  label,
  id,
  className,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.switchContainer} ${className || ''}`}>
      {label && (
        <label htmlFor={switchId} className={styles.label}>
          {label}
        </label>
      )}
      <div
        className={`
          ${styles.switch}
          ${styles[size]}
          ${isChecked ? styles.checked : ''}
          ${disabled ? styles.disabled : ''}
        `}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
        aria-labelledby={label ? switchId : undefined}
      >
        <div className={styles.track}>
          <div className={styles.thumb} />
        </div>
      </div>
    </div>
  );
}
