import React from 'react'
import styles from './TableHeader.module.scss'

const TableHeader = () => {
  return (
    <div className={styles.table}> 
    <div className={styles.tableBlock}>
      <h5 style={{width: '2.5vw'}}>#</h5>
      <h5>Name</h5>
      <h5 style={{width: '6.5vw'}}></h5>
      <h5 style={{width: '4.5vw'}}>Price</h5>
      <h5 style={{width: '4.5vw'}}>Capital</h5>
      <h5 >24 Hour</h5>
      <h5>add</h5>
    </div>
    </div>
  )
}

export default TableHeader