export const validate_Length=(data,lenth)=>{
    if(data.lenth > lenth){
        return false;
    }
    else{
        return true;
    }

}


export const isValidateDateGraiterThanCurrent=(dateString) =>{
    const enteredDate = new Date(dateString);
    const currentDate = new Date();
    return enteredDate > currentDate;
}


// const validateRequired=()=>{
//   if(eventDetails.eventname ==='' || eventDetails.eventdescription === ''|| eventDetails.eventdate === '' || eventDetails.eventvenue ===''|| eventDetails.eventimage ===''|| workshopDetails.length ==0){
//     setNotificationView(ToasNotification('error', 'All fields are required.'));
//     return;
//   }

// }