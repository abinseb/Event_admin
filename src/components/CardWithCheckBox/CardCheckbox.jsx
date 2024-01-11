import React ,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardCheckbox = ({id, imageUrl,starttime,endtime, date,title, description, isSelected, onCheckboxChange }) => {
    const [checked, setChecked] = useState(false);
    
    const handleCheckboxChange = () => {
        setChecked(!checked);
        onCheckboxChange(id);
        console.log("iddd",id);
      };
    
    return (
    <Card style={{marginTop:'20px',justifyContent:'center',}}>
      <CardMedia
        component="img"
        height="140"
        // style={{height:'130px',width:'130px'}}
        image={`data:image/jpeg;base64,${imageUrl}`}
        alt="Card Image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{
            overflow: 'hidden',
            maxWidth: '4cm',
            wordWrap: 'break-word',
            paddingBottom:'10px'
            }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {starttime} to {endtime}
        </Typography>
        <Checkbox
        //   icon={<FavoriteIcon />}
        //   checkedIcon={<FavoriteIcon color="primary" />}
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      </CardContent>
    </Card>
  );
};

export default CardCheckbox;
