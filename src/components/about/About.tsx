import React, { FC } from 'react'
import { AboutProps } from '../../types/about.type'
import styles from './About.module.scss'
import { useNavigate } from 'react-router-dom'
import Chart from '../chart/Chart'
import { useQuery } from 'react-query'
import { getCoinHistory } from '../../api/getCoin'
import Navbar from '../header/Header'
import useModal from '../../hooks/useModal'
import Modal from '../modal/Modal'

const About: FC<AboutProps> = ({coin}) => {

  const { isOpen, toggle } = useModal();

  const navigate = useNavigate();

  const returnBack = () => {
    navigate('/')
  }

  const {data} = useQuery({
    queryKey: ['charts'],
    queryFn: () => getCoinHistory(coin?.name.toLocaleLowerCase())
  })

  return (
    <div>
        <Navbar/>
        <div className={styles.about}>
            <button onClick={returnBack}>&larr;</button>
            <div className={styles.aboutHead}>
              <img 
                src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLocaleLowerCase()}@2x.png`} 
                alt={coin?.name}
              />
              <h3 style={{marginLeft: '10px'}}>{coin?.name}</h3>
              <h3 style={{marginLeft: '10px', fontWeight: '400'}}>{coin?.symbol}</h3>
              <h3 className={+parseFloat(coin?.changePercent24Hr).toFixed(2) > 0 ? styles.aboutDay : styles.aboutDayRed } style={{marginLeft: '10px', width: '80px'}}>{parseFloat(coin?.changePercent24Hr).toFixed(2)}</h3>
              <h3 style={{marginLeft: '7.5px'}}>{'1d'}</h3>
            </div> 
            <div className={styles.aboutBody}>
              <h1 style={{marginLeft: '10px', marginTop: '10px'}}>{+parseFloat(coin?.priceUsd).toFixed(2) === 0 ? null : '$ ' + parseFloat(coin?.priceUsd).toFixed(2)}</h1>
              <h3 style={{marginLeft: '10px', marginTop: '10px'}}>{coin?.rank}</h3>
              <h3 style={{marginLeft: '10px', marginTop: '10px'}}>{+parseFloat(coin?.supply).toFixed(2) === 0 ? null : '$ ' + parseFloat(coin?.supply).toFixed(2)}</h3>
              <button style={{marginTop: '10px'}} onClick={toggle}>Add</button>
              <Modal isOpen={isOpen} toggle={toggle} action={'BUY'} coin={coin?.name} symbol={coin?.symbol} img_src={coin?.symbol.toLocaleLowerCase()} price={coin?.priceUsd}>
                
              </Modal>
            </div>
        </div>
        <div className={styles.charts}>
          <Chart data={data}/>
        </div>
    </div>
  )
}

export default About