import React, { useEffect } from 'react'
import { Avatar, Card, CardContent,Typography, CardMedia } from '@mui/material'
import './component.css'
import { CardHeader } from 'react-bootstrap'
import { useState } from 'react'

const MyCard = ({imgname,title,titlecolor,count,description,color,workshoplist}) => {

  return (
    <Card className='card-custom-style'>
    <CardHeader className='custom-card-header'>
        <Avatar style={{margin:'3px'}} >
            <img style={{height:'100%'}} src={require(`../image/${imgname}`)} />
        </Avatar>
        <Typography className='title-custom-style' variant='h6'  color={titlecolor}>{title}</Typography>
      </CardHeader>
    <CardContent className='card-content-custom'>
    <Typography className='count-number'variant='h4'  color={color} gutterBottom>
      {count}
    </Typography>
    <Typography style={{fontSize:'80%',fontWeight:'bolder'}}>{description}</Typography>
    {workshoplist && workshoplist.length !== 0 && (
          <ul style={{fontSize:'12px',listStyleType: 'none', padding: 0}}>
            {workshoplist.map((workshop, index) => (
              <li key={index} style={{ margin: '2px 0' }}>{workshop}</li>
            ))}
          </ul>
        )}
    </CardContent>
</Card>
  )
}

export default MyCard

