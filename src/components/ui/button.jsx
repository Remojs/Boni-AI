import React from 'react';
import styles from './button.module.css';

export function Button({ children, className, onClick, ...props }) {
  return (
    <button 
      className={`${styles.button} ${className || ''}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
