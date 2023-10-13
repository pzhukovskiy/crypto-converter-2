import React, { FC } from 'react'
import { TableType } from '../../types/table.type'
import styles from './Table.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const Table: FC<TableType> = ({index, name, symbol, price, changePercent24Hr, marketCapUsd}) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/about/${name.toLocaleLowerCase()}`)
  }

  return (
    <div key={index} className={styles.table}> 
            <h5 className={styles.tableIndex}>{index}</h5>
            <div className={styles.tableLogo}>
              <img 
                src={`https://assets.coincap.io/assets/icons/${symbol.toLocaleLowerCase()}@2x.png`} 
                alt={name} 
              />
            </div>
            <Link to={`/about/${name.toLocaleLowerCase()}`}>
              <h5 className={styles.tableName}>{name}</h5>
            </Link>
            <h5 className={styles.tableSymbol}>{symbol}</h5>
            <h5 className={styles.tablePrice}>{+parseFloat(price).toFixed(2) === 0 ? null : '$ ' + parseFloat(price).toFixed(2)}</h5>
            <h5 className={styles.tableMarketCapUsd}>{(Math.floor(+marketCapUsd * 100000) / 1000000000000).toFixed(2)}</h5>
            <h5 className={+parseFloat(changePercent24Hr).toFixed(2) > 0 ? styles.tableDay : styles.tableDayRed }>{+parseFloat(changePercent24Hr).toFixed(2)}</h5>
            <button className={styles.tableButton} onClick={handleNavigate}>add</button>
    </div>
  )
}

export default Table