import React from 'react'
import './Dashboard.css'
import { Avatar, Card, CardContent, Grid ,Typography,CardHeader} from '@mui/material'
import MyCard from '../../components/Mycard'


const Dashboard = () => {
  return (
    <div className='custom-container-outer'>
        <div className='inner-container-box'>
            <Grid container spacing={4} >
                <Grid item xs={12} md={4}>
                <MyCard 
                    imgname='workshop.jpeg'
                    title="Total Registration"
                    count={2000}
                    description="Total Event Registration"
                    color='#3D20F0'
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <MyCard 
                    imgname='verified.jpeg'
                    title="Verified Count"
                    titlecolor='#115528'
                    count={300}
                    description="Total event participants count"
                    color='#34B108'
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <MyCard 
                    imgname='workshop.jpeg'
                    title="Total Registration"
                    count={2000}
                    description="Total Event Registration"
                    color='#3D20F0'
                    />
                </Grid>
            </Grid> 
            <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                    <card>

                    </card>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Dashboard
