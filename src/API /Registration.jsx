import axios from "axios";


export const Event_registration_Function=async(eventData)=>{
    try{
        console.log('EventData,',eventData.eventDetails)
        const event = await eventData.eventDetails;
        console.log("new eventData",event.eventname)
    const RegistrationEvent = axios.post(`http://192.168.1.109:3000/host/event/create`,{
        "title" :event.eventname,
        "description" : event.eventdescription,
        "venu" :event.eventvenue,
        "date" : event.eventdate,
        "workshops" : eventData.workshops
       })
       console.log("response",RegistrationEvent)
       return await(RegistrationEvent);
      
    }
    catch(error){
        console.error("Error in registration" , error);
    }
}