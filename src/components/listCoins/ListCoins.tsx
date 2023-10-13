import React, { FC, useEffect, useState } from 'react'
import { Coin, CoinProps } from '../../types/coin.type'
import Table from '../table/Table'
import Input from '../input/Input'
import InputSelect from '../input/InputSelect'
import TableHeader from '../table/tableHeader/TableHeader'

const ListCoins: FC<CoinProps> = ({ coins }) => {
  const [selectedCoin, setSelectedCoin] = useState('');
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [selectedFilterOption, setSelectedFilterOption] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredCoinsByName = filterCoinByName(selectedCoin, coins);
      const sortedCoins = filterCoin(filteredCoinsByName, selectedFilterOption);
      setFilteredCoins(sortedCoins);
    }, 150);

    return () => clearTimeout(debounce);
  }, [selectedCoin, coins, selectedFilterOption]);

  const handleFilter = (searchText: string) => {
    setSelectedCoin(searchText);
  };

  const handleFilterOptionChange = (option: string) => {
    setSelectedFilterOption(option);
  };

  const filterCoinByName = (searchText: string, listOfCoins: Coin[]) => {
    if (!searchText) return listOfCoins;
    return listOfCoins?.filter((coin) => {
      return coin.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }

  const filterCoin = (listOfCoins: Coin[], option: string) => {
    //sort lower to high
    switch(option) {
      case('Select filter'): {
        return listOfCoins  
      }
      case('Price'): {
        return listOfCoins?.sort((a, b) => +a.priceUsd - +b.priceUsd);
      }
      case('Capitalize'): {
        return listOfCoins?.sort((a, b) => +a.marketCapUsd - +b.marketCapUsd);
      }
      case('24 Hour'): {
        return listOfCoins?.sort((a, b) => +a.changePercent24Hr - +b.changePercent24Hr);
      }
    }

    return listOfCoins;
  }

  return (
<div>
  <TableHeader/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Input onFilter={handleFilter} />
        <label style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>Sort by</label>
        <InputSelect onFilterOptionChange={handleFilterOptionChange} />
      </div>
      {filteredCoins?.map((coin, index) => (
        <Table
          index={index + 1}
          name={coin.name}
          price={coin.priceUsd}
          symbol={coin.symbol}
          changePercent24Hr={coin.changePercent24Hr}
          marketCapUsd={coin.marketCapUsd}
          key={index}
        />
      ))}
    </div>
  );
}

export default ListCoins;