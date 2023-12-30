import  React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { colors } from '@mui/material';

export default function BasicBars() {
  const color=['#1A91B7','#61904A']
  return (
    <BarChart
        xAxis={[{
            scaleType:'band',
            data:['Google','IBM','Oracle']
        }]}
        series={[
            {
                data:[400,400,400],
                label:'Total Registration',
                
            },
            {
                data:[300,250,311],
                label:'Verified'
            }
        ]}
      colors={color}
      width={500}
      height={300}
    />
  );
}