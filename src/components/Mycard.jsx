import React from 'react'
import { Avatar, Card, CardContent,Typography, CardMedia } from '@mui/material'
import './component.css'
import { CardHeader } from 'react-bootstrap'

const MyCard = ({imgname,title,titlecolor,count,description,color}) => {
  return (
    <Card className='card-custom-style'>
    <CardHeader className='custom-card-header'>
        <Avatar >
            <img style={{height:'100%'}} src={require(`../image/${imgname}`)} />
        </Avatar>
        <Typography className='title-custom-style' variant='h6'  color={titlecolor}>{title}</Typography>
      </CardHeader>
    <CardContent className='card-content-custom'>
    <Typography className='count-number'variant='h4'  color={color} gutterBottom>
      {count}
    </Typography>
    <Typography style={{fontSize:'80%',fontWeight:'bolder'}}>{description}</Typography>
    </CardContent>
</Card>
  )
}

export default MyCard

