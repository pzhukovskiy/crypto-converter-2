import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import { inputSelectData } from './inputSelectData';
import { InputSelectProps } from '../../types/input.type';

const InputSelect: FC<InputSelectProps> = ({ onFilterOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelectedOption(option);
    onFilterOptionChange(option);
  };

  return (
    <div className={styles.input}>
      <select value={selectedOption} onChange={handleOptionChange}>
        {inputSelectData?.map((option) => (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
