import React from 'react'
import { useQuery } from 'react-query';
import { getCoin } from '../api/getCoin';
import ListCoins from '../components/listCoins/ListCoins';
import Header from '../components/header/Header';
import Error from '../components/error/Error';
import Loading from '../components/loading/Loading';

const HomePage = () => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['data'],
        queryFn: getCoin
    });
    
    return (
        <div>
            {isError && <Error/>}
            {isLoading && <Loading/>}
            <Header/>
            <ListCoins coins={data}/>
        </div>
    )
}

export default HomePage