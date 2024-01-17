import React from 'react'
import AppAppBar from '../components/LandingNew/views/AppAppBar'
import ProductHowItWorks from '../components/LandingNew/views/ProductHowltWorks'
import ProductCTA from '../components/LandingNew/views/ProductCTA'
import ProductSmokingHero from '../components/LandingNew/views/ProductSmokingHero'
import AppFooter from '../components/LandingNew/views/AppFooter'
import EventTopScreen from '../components/LandingNew/views/EventTopScreen'
import EventMemmoriesAlbum from '../components/LandingNew/views/EventMemmories'
import EventTypeDetails from '../components/LandingNew/views/EventType'

const Home = () => {
  return (
    <React.Fragment>
        <AppAppBar/>
        <EventTopScreen/>
        <EventTypeDetails/>
        <EventMemmoriesAlbum/>
        {/* <ProductHowItWorks/>
        <ProductCTA/>
        <ProductSmokingHero/> */}
        <AppFooter/>
    </React.Fragment>
  )
}

export default Home
