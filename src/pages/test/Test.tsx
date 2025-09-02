import styles from './Test.module.css';

export default function Test() {
  const base = ['white', 'base-50', 'base-100', 'base-200', 'base-300', 'base-400', 'black'];
  const primary = [
    'primary-50',
    'primary-100',
    'primary-200',
    'primary-300',
    'primary-400',
    'primary-500',
    'primary-600',
    'primary-700',
  ];
  const secondary = [
    'secondary-50',
    'secondary-100',
    'secondary-200',
    'secondary-300',
    'secondary-400',
    'secondary-500',
    'secondary-600',
    'secondary-700',
  ];
  const danger = [
    'danger-50',
    'danger-100',
    'danger-200',
    'danger-300',
    'danger-400',
    'danger-500',
    'danger-600',
    'danger-700',
  ];
  const point = ['point-olive', 'point-teal', 'point-cream'];
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {base.map((item) => (
          <div className={styles.item} style={{ backgroundColor: `var(--${item})` }} key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.box}>
        {primary.map((item) => (
          <div className={styles.item} style={{ backgroundColor: `var(--${item})` }} key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.box}>
        {secondary.map((item) => (
          <div className={styles.item} style={{ backgroundColor: `var(--${item})` }} key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.box}>
        {danger.map((item) => (
          <div className={styles.item} style={{ backgroundColor: `var(--${item})` }} key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.box}>
        {point.map((item) => (
          <div className={styles.item} style={{ backgroundColor: `var(--${item})` }} key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
