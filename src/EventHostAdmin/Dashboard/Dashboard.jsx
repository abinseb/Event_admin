import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card } from '@mui/material';
import MyCard from '../../components/Mycard';
import { DashboardDataFetch } from '../../API /GetDataFromDB';
import { BarChart } from '@mui/x-charts/BarChart';
import './Dashboard.css'
import RedirectedToRegister from '../WarningPages/RedirectToRegister';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null); // Initialize as null
  const [dashboardFulldata, setDashboardFulldata]=useState([])
  const [workshop, setWorkshop] = useState([]);
  const [workshopTotal, setWorkshopTotal] = useState([]);
  const [workshopVerified, setWorkshopVerified] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashbord = await DashboardDataFetch();
        setDashboardData(dashbord);
        setDashboardFulldata(dashbord)
        console.log(dashbord);

        const workshopKey = dashbord.total_workshop.map((workshop) => workshop.key);
        console.log("Workshop",workshopKey);
        setWorkshop(workshopKey);

        const totalReg = dashbord.total_workshop.map((workshop) => workshop.value);
        setWorkshopTotal(totalReg);
        console.log("Totalreg",totalReg);
        const verifiedWorkshop = dashbord.verfied_workshop.map((workshop) => workshop.value);
        setWorkshopVerified(verifiedWorkshop);
        console.log("Verified",verifiedWorkshop);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {dashboardFulldata === undefined || dashboardFulldata.length ===0 ? 
    <RedirectedToRegister />
    : 
    <div className='custom-container-outer'>
      <div className='inner-container-box'>
        <Grid container spacing={4} >
          <Grid item xs={12} md={4}>
            <MyCard
              imgname='workshop.jpeg'
              title='Total Registration'
              count={dashboardData?.total_user || 0}
              description='Total Event Registration'
              color='#3D20F0'
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <MyCard
              imgname='verified.jpeg'
              title='Verified Count'
              titlecolor='#115528'
              count={dashboardData?.total_verified || 0} 
              description='Total event participants count'
              color='#34B108'
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <MyCard
              imgname='workshop.jpeg'
              title='Workshop List'
              titlecolor='#'
              workshoplist={dashboardData?.workshoplist || []}
              color='#3D20F0'
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ paddingTop: '5%' }}>
          <Grid item xs={12} md={8}>
            <Card className='card-with-graph'>
              <Typography className='barchart-card-title'>Workshop Verification Chart</Typography>
              <div style={{ width: '100%', overflowX: 'auto' }}>
                {!loading && dashboardData && (
                  <BarChart
                    xAxis={[
                      {
                        scaleType: 'band',
                        data: workshop,
                      },
                    ]}
                    series={[
                      {
                        data: workshopTotal.map((value) => (isFinite(value) && !isNaN(value) ? value : 0)),
                        label: 'Total Registration',
                      },
                      {
                        data: workshopVerified.map((value) => (isFinite(value) && !isNaN(value) ? value : 0)),
                        label: 'Verified',
                        type: 'bar',
                      },
                    ]}
                    colors={['#1A91B7', '#61904A']}
                    width={500}
                    height={300}
                  />
                )}
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
}
    </>
  );
};

export default Dashboard;
