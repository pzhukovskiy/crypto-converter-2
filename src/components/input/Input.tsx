import React, { FC } from 'react';
import styles from './Input.module.scss';
import { InputProps } from '../../types/input.type';

const Input: FC<InputProps> = ({ onFilter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    onFilter(searchText);
  }

  return (
    <div className={styles.input}>
      <input type="text" placeholder='Search coin' onChange={handleChange} />
    </div>
  );
}

export default Input;
