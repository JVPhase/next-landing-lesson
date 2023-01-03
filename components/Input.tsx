import styles from './Input.module.css';

interface InputProps {
  className?: string;
  placeholder?: string;
}

export default function Input({ className, placeholder }: InputProps) {
  return (
    <input
      className={`${styles.Root} ${className}`}
      placeholder={placeholder}
    />
  );
}
