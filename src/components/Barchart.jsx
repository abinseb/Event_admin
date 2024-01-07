import  React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function BasicBars({totalWorkshopData , verifiedWorkshopData}) {
  const workshopkeys = totalWorkshopData.map(item=>item.key);
 const totalRegistrationValues = totalWorkshopData.map(item=>item.value);
  const verifiedValues = verifiedWorkshopData.map(item =>item.value);

  console.log("kkkkkkkkk",totalWorkshopData,"hhhhhh",verifiedWorkshopData,"keyys")
  const color=['#1A91B7','#61904A']
  return (
    <BarChart
        xAxis={[{
            scaleType:'band',
            data:workshopkeys || null
        }]}
        series={[
            {
                data:totalRegistrationValues|| null,
                label:'Total Registration',
                
            },
            {
                data:verifiedValues || null,
                label:'Verified',
                type: 'bar',
            }
        ]}
      colors={color}
      width={500}
      height={300}
    />
  );
}