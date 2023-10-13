import React, { FC } from 'react'
import styles from './Button.module.scss'
import { ButtonType } from '../../types/button.type'

const Button: FC<ButtonType> = ({ index }) => {
  return (
    <div className={styles.buttonCustom}>
      <div className={styles.buttonText}>
        <p>{index}</p>
      </div>
    </div>
  );
}

export default Button;
