// PartcipantRegister.jsx

import './reg.css';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  RadioGroup,
} from '@mui/material';
import RadioButton from '../../components/RadioButton';
import DropdownList from '../../components/DropdownSelectlist/DropDownList';
import CardCheckbox from '../../components/CardWithCheckBox/CardCheckbox';
import axios from 'axios';
import { URL_Fetch } from '../../API /URL_Fetch';
import SelectList from '../../components/DropdownSelectlist/SelectList';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ParticipantRegister = () => {

  const navigate = useNavigate();
  const url = URL_Fetch();
  const [participantdata , setParticipantData] = useState([]);
  const [fieldData , setFielddata] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [stateList , setStateList] = useState([]);
  const [district , setDistrict] = useState([]);
  const [error,setError] = useState(null);
  const [showNotification , setShowNotification] = useState('');
  // event id from the route
  const location = useLocation();
// Access the state object from the location
const { state } = location;

// Access the eventid from the state
const eventId = state && state.eventid;


  useEffect(()=>{
    console.log("hiiiiii");
    RegistrationDataFetch();
    stateListFetch();
  },[])

  const RegistrationDataFetch=async()=>{
    console.log("eventid",eventId);
    try{
    const RegData =await axios.get(`${url}/form/field/${eventId}`);
    console.log("dattaaa",RegData.data);
    const Fields = await RegData.data.fields;
    setFielddata(Fields);
    console.log("Fulldata",Fields);
    const labelf =[]
    Fields.forEach(element => {
      labelf.push(element.label);
    });
    console.log("label",labelf)
  }
    catch(error){
      console.error(error);
     
    }
  }

  const stateListFetch=async()=>{
    try{
    const state = await axios.get(`${url}/form/states`)
    setStateList(state.data.states)
    console.log("StateList",state)
    }
    catch(error){
      console.error(error);
    }
  }
  const handleCheckboxChange = (cardId) => {
    console.log("cardid",cardId)
    setSelectedCards((prevSelectedCards) => {
      // Toggle the presence of the cardId in the array
      if (prevSelectedCards.includes(cardId)) {
        // If cardId is already present, remove it
        return prevSelectedCards.filter((id) => id !== cardId);
      } else {
        // If cardId is not present, add it
        return [...prevSelectedCards, cardId];
      }
    });
  };


const RegistrationParticipate=async()=>{
  try{
   

    console.log("RegDta",selectedCards);
  const requestBody =await {
    "event" : eventId,
    "state":participantdata["state"],
    "district":participantdata["district"]
  }
 await fieldData.forEach(item=>{
    if(item.name !== "workshops" ){
    requestBody[item.name] = participantdata[item.name]
    }
    else{
      requestBody[item.name] = selectedCards
    }
  })
  console.log("Reg Object",requestBody);

  const participantReg = await axios.post(`${url}/participants/add`,
     requestBody
    )

    console.log("Reg Response",participantReg.data);
    alert(participantReg.data.data);
    setShowNotification(nofificationAlertReg('success',participantReg.data.data))
    navigate('/participanthome')
  }
  catch(error){
    console.log(error.response.data.errors[0].path );
    setError(error);
    setShowNotification(nofificationAlertReg('error',error.response.data.errors[0].msg))
    
  }
}

// notification Message
const nofificationAlertReg=(type,msg)=>{
  return(
    <ToastMessage
      type={type}
      message={msg}
    />
  )
}

// textfield data
const handleChangeText=(e)=>{
  const { name, value } = e.target;
  setParticipantData((prevData)=>({
    ...prevData,
    [name]:value
  }))
}

// gender radio value
const handleChangeOfRadio=(Gender)=>{
console.log("Gender",Gender);
setParticipantData((prevData)=>({
  ...prevData,
  [Object.keys(Gender)[0]]:Object.values(Gender)[0]
}))
// [Object.keys(genderResponse)[0]]: Object.values(genderResponse)[0]
}

const handleDropdownChange=(listSelect)=>{
  console.log('Select',listSelect);

  setParticipantData((prevData)=>({
    ...prevData,
    [Object.keys(listSelect)[0]]:Object.values(listSelect)[0]
  }))
}

const stateListHandleChange=async(state)=>{
  console.log('state',state)
  await districtFetch(state);
 await setParticipantData((prevData)=>({
    ...prevData,
    ['state']:state
}))
}

const districtHandleChange=(dist)=>{
  console.log(dist);
  setParticipantData((prevData)=>({
    ...prevData,
    ['district']:dist
}))
  

}

  const renderFormElement =(field)=>{
    switch(field.type){
      case 'text':
      case 'email':
        return(
          <TextField
          className='event-textfield-style'
          label={field.label}
          variant='outlined'
          name={field.name}
          value={participantdata[field.name]}
          onChange={handleChangeText}
          helperText={error && field.name === error.response.data.errors[0].path ? error.response.data.errors[0].msg : null }
          error={Boolean(error && field.name === error.response.data.errors[0].path)}
        />
        );

      case 'radio':
        return(
            <RadioButton
            name={field.name}
            handleRadioChange={handleChangeOfRadio}
            
            />
          )

      case 'dropdown':
        return(
          <DropdownList
          datalist={field.value}
          label={field.label}
          name={field.name}
          handleChange={handleDropdownChange}
        />
        ) 
      case 'card':
        return(
       
          (field.value.map((card,index)=>(
            <CardCheckbox
              key={index}
              id={card._id}
                imageUrl={card.icon}
                title={card.title}
                description={card.description}
                onCheckboxChange={handleCheckboxChange}
                date={new Date(card.date).toISOString().split('T')[0]}
                starttime='09:30 Am'
                endtime='04:30 pm'
          />
          )))
        
        )
        default:
          return null;
    }

   
  }

const districtFetch=async(state)=>{
  try{
    const districtList =await axios.get(`${url}/form/district/${state}`)
    console.log("district",districtList.data.result.districts);
    setDistrict(districtList.data.result.districts)
  }
  catch(error){
    console.error("Error",error);
  }

}



  return (
    <div className='participants-Registration-container'>
      <div className='event-parti-title-container'>
        <Typography style={{ paddingRight: '30px', fontSize: '40px', fontWeight: '500' }}>Register</Typography>
      </div>
      
      <div className='event-partic-form-container' >
      {fieldData.map((field,index)=>(
        <div className='event-partic-textbox-container' key={index}>
          <label className='label'>{field.label}</label>
            {renderFormElement(field)}
        </div>
       ))}

    
     
    <div className='event-partic-textbox-container ' >
      
        <Grid container spacing={1}>
        {stateList && 
          <Grid item xs={12} md={6}>
          <label className='label'>Select State</label>
          <SelectList
            dataList={stateList}
            placeholder='Select States'
            handleChangelist={stateListHandleChange}
          />
          </Grid>
        } 

      {district && 
          <Grid item xs={12} md={6}>
          <label className='label'>Select District</label>
          
            <SelectList
            dataList={district}
            placeholder='Select district'
            handleChangelist={districtHandleChange}
          />
          </Grid>
        }
        </Grid>
    </div>
    
    </div>
    <div className='event-partic-button-view'>
      <Button variant='contained' onClick={RegistrationParticipate} className='event-partici-button'>Register</Button>
      </div>
      {showNotification}
    </div>
  );
};

export default ParticipantRegister;
