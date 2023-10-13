import React, { FC } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { ChartType } from '../../types/chart.type';

const Chart: FC<ChartType> = ({ data }) => {
  return (
    <div>
      <h2>Graphic</h2>
      <AreaChart width={500} height={300} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" type="number" domain={['dataMin', 'dataMax']} tickCount={10} />
        <YAxis dataKey="priceUsd" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
        <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fillOpacity={1} fill="url(#colorPrice)" />
      </AreaChart>
    </div>
  );
};

export default Chart;
