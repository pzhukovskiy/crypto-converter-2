import React, { FC } from 'react'
import { HeaderType } from '../../types/header.type'

const HeaderList: FC<HeaderType> = ({coin}) => {
  return (
    <div style={{display: 'flex', margin: '20px', justifyContent: 'center'}}>
        {coin?.slice(0, 3).map((data) => (
            <div key={data.id}>
                <h4 style={{marginLeft: '20px'}}>{data.name}</h4>
                <h4 style={{marginLeft: '20px'}}>{+parseFloat(data.priceUsd).toFixed(2)}</h4>
            </div>
        ))}
    </div>
  )
}

export default HeaderList