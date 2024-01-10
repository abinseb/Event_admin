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

const ParticipantRegister = () => {

  const url = URL_Fetch();
  const [participantdata , setParticipantData] = useState([]);
  const [fieldData , setFielddata] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [stateList , setStateList] = useState([]);
  const [district , setDistrict] = useState([]);
  const [selectedState , setSelectedState] = useState('');
  
  useEffect(()=>{
    console.log("hiiiiii");
    RegistrationDataFetch();
    stateListFetch();
  },[])

  const RegistrationDataFetch=async()=>{
    try{
    const RegData =await axios.get(`${url}/form/field/6549f0527a62f323d043db53`);
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
  const handleCheckboxChange = (cardId, isSelected) => {
    console.log("cardid",cardId)
    setSelectedCards((prevSelectedCards) => {
      if (isSelected) {
        // If checkbox is checked, add the cardId to the array
        return {
          ...prevSelectedCards,
          [cardId]: true,
        };
      } else {
        // If checkbox is unchecked, remove the cardId from the array
        const { [cardId]: removedCard, ...updatedSelectedCards } = prevSelectedCards;
        return updatedSelectedCards;
      }

    });
  };

const displayData=()=>{
  setParticipantData((prevData)=>({
    ...prevData,
    ['workshops']:selectedCards
}))
  console.log("Selectedlist",participantdata)
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
setParticipantData([
  ...participantdata,
  Gender
])
}

const handleDropdownChange=(listSelect)=>{
  console.log('Select',listSelect);
  setParticipantData([
    ...participantdata,
    listSelect
  ])
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
                isSelected={selectedCards[card._id] || false}
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
        <Typography style={{ paddingRight: '30px', fontSize: '40px', fontWeight: '500' }}>Register..</Typography>
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
      <Button variant='contained' onClick={displayData} className='event-partici-button'>Register</Button>
      </div>
      
    </div>
  );
};

export default ParticipantRegister;
