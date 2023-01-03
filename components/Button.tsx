import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={`${styles.Root} ${className}`}>{children}</button>;
}
