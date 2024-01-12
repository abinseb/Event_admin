import axios from "axios";
import { URL_Fetch } from "./URL_Fetch";

const url = URL_Fetch();
const token = sessionStorage.getItem('token');
const eventid = localStorage.getItem("eventid");

export const Event_registration_Function=async(eventData)=>{
    console.log("Token",token);
    try{
        console.log('EventData123,',eventData.eventDetails)
        const event = await eventData.eventDetails;
        console.log("new eventData",event.startdate_time)
       
    const RegistrationEvent = axios.post(`${url}/host/event/create`,{
        "title" :event.eventname,
        "description" : event.eventdescription,
        "venu" :event.eventvenue,
        "start_date_time":event.startdate_time,
        "end_date_time":event.enddate_time,
        "workshops" : eventData.workshops,
        "icon":event.eventimage

       },
       {
        headers:{
            Authoriztion:token,
        },
      }
       
       
       )
       console.log("response",RegistrationEvent)
       return await(RegistrationEvent);
      
    }
    catch(error){
        console.error("Error in registration" , error);
       return false;
    }
}



// Signup event host 
export const  HostSignUp=async(userdata)=>{
   console.log("eventid forupdate",eventid);
    try{
        console.log("userdataname",userdata)
        const signUpReguest = await axios.post(`${url}/auth/register`,{
            "email" : userdata.email,
            "password" : userdata.password,
            "username" : userdata.email,
            "role" : "host",
            "mobile" : userdata.mobile,
            "organization" : userdata.organization
        })

        console.log("SignUp Request",signUpReguest.status)
        return await signUpReguest.status;
    }
    catch(error){
        console.error("Error in signup", error);
    }
}


// Add insert
export const AddWorkshopDetails=async(workshop)=>{
    
    try{
        console.log("worksopgggg",workshop);
        const updateWorkshop = await axios.post(`${url}/host/workshop/add`,{
            "description" : workshop.workshopdescription,
            "title" :  workshop. workshopname,
            "date" : workshop.workshopdate,
            "maximumparticipants":workshop.maximumparticipants,
            "event" : eventid,
            "venu" : workshop.workshopvenue,
            "icon"  : workshop.workshopicon,
        })

        console.log(updateWorkshop.data)
        return await updateWorkshop.data;
    }
    catch(error){

    }
}