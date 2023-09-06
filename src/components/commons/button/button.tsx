import React from 'react';
import styles from './button.module.css';
interface Props {
  text: string;
  border?: string;
  disabled?: boolean;
}
const Button = ({ text, border, disabled }: Props) => {
  const combinedClassName = `${styles[border]} ${styles.btnDistance}`;
  return (
    <>
      <button
        className={`${combinedClassName} ${disabled ? styles.disabled : ' '}`}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
