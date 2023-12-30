import React from 'react'
import './Dashboard.css'
import { Avatar, Card, CardContent, Grid ,Typography,CardHeader, CardMedia} from '@mui/material'
import MyCard from '../../components/Mycard'
import BasicBars from '../../components/Barchart'


const Dashboard = () => {
    const workshoplist = ['Google','IBM','Oracle']
  return (
    <div className='custom-container-outer' >
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
                    title="Workshop List"
                    titlecolor='#'
                    workshoplist ={workshoplist}
                    color='#3D20F0'
                    />
                </Grid>
            </Grid> 
            <Grid container spacing={1} style={{paddingTop:'5%'}}>
                <Grid item xs={12} md={10}>
                    <Card className='card-with-graph'>
                        <Typography className='barchart-card-title'>Workshop Verification Chart</Typography>
                        <div style={{ width: '100%', overflowX: 'auto' }}>
                            <BasicBars />
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Dashboard
