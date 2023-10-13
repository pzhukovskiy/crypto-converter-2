import React from 'react'
import styles from './Header.module.scss'
import { useQuery } from 'react-query';
import { getCoin } from '../../api/getCoin';
import HeaderList from './HeaderList';

const Navbar = () => {

  const {data, isError, isLoading} = useQuery({
    queryKey: ['data'],
    queryFn: getCoin
  });

  return (
    <div className={styles.header}>
      <HeaderList coin={data}/>
    </div>
  )
}

export default Navbar