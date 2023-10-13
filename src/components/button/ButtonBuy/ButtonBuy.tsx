import React, { FC } from 'react'
import styles from './ButtonBuy.module.scss'
import { ButtonTypeBuy } from '../../../types/button.type'

const ButtonBuy: FC<ButtonTypeBuy> = ({quantity, price}) => {
  return (
    <div className={styles.buttonBuy}>
        <button>Buy {quantity} for {price} $</button>
    </div>
  )
}

export default ButtonBuy