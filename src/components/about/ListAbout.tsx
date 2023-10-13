import React from 'react'
import { getCoinById } from '../../api/getCoin'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import About from './About';
import Error from '../error/Error';
import Loading from '../loading/Loading';

const ListAbout = () => {

    const {rank} = useParams();

    const {data, isError, isLoading} = useQuery({
        queryKey: ['aboutCoin'],
        queryFn: () => getCoinById(rank!)
    });

  return (
    <div>
        {isError && <Error/>}
        {isLoading && <Loading/>}
        <About coin={data}/>
    </div>
  )
}

export default ListAbout