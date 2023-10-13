import React, { FC, useState } from 'react'
import styles from './Modal.module.scss'
import { ModalType } from '../../types/modal.type'
import ButtonBuy from '../button/ButtonBuy/ButtonBuy'

const Modal: FC<ModalType> = ({isOpen, toggle, children, action, coin, img_src, symbol, price}) => {

  const [quantity, setQuantity] = useState(1);
  const [sum, setSum] = useState(0);

  const buyCrypto = (quantity: number, input_price: string) => {
    try {
      if (quantity <= 0 || quantity > 1000) {
        alert('Error')
      }

      else {
        setSum(+parseFloat(input_price).toFixed(2) * quantity)
        alert(`You buy ${coin} for ${sum} in ${quantity} quantity`)
        

        localStorage.setItem('price', price.toString());
        localStorage.setItem('quantity', quantity.toString());
        localStorage.setItem('sum', sum.toString());

      }
    }
    catch(e) {
      
    }
  }

  return (
    <div>
      {isOpen && (
        <div className={styles.modal} onClick={toggle}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={(action === 'BUY') ? styles.modalBuy : styles.modalCell}>
                <h4>{action}</h4>
              </div>
              <div className={styles.modalCoin}>
                <h3>{coin}</h3>
              </div>
              <div className={styles.modalCoin}>
                <h3>{symbol}</h3>
              </div>
              <div className={styles.modalImage}>
                <img 
                  src={`https://assets.coincap.io/assets/icons/${img_src}@2x.png`} 
                  alt={coin}
                />
              </div>
              <div className={styles.modalClose} onClick={toggle}>Close</div>
            </div>
            <div className={styles.modalBody}>
              <h4>Input quantity</h4>
              <input type="number" placeholder='Input value' value={quantity} max={1000} min={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value)}/>
              <h4>price: {+parseFloat(price).toFixed(2) * quantity} $</h4>
            </div>
            <div className={styles.modalBottom} onClick={() => buyCrypto(quantity, parseFloat(price).toFixed(2))}>
              <ButtonBuy quantity={quantity} price={+parseFloat(price).toFixed(2) * quantity}/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal