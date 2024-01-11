import { URL_Fetch } from "./URL_Fetch";
import axios from "axios";


const url = URL_Fetch();
const eventid = localStorage.getItem("eventid");
export const upDateWorkshop=async(workshop)=>{
    try{
        console.log("Edit data",workshop)
        const updateWorkshop = await axios.post(`${url}/host/workshop/edit/${workshop._id}`,{
            "description" : workshop.description,
            "title" :  workshop.title,
            "date" : workshop.date ,
            "event" :workshop.event,
            "venu" : workshop.venu,
            "icon"  : workshop.icon,
            "maximumparticipants":workshop.maximumparticipants,
        })

        console.log("Response",updateWorkshop.data)
        return await updateWorkshop.data;

    }
    catch(error){

    }
}

 export const update_Event_details =async(eventdata)=>{
    // console.log("api",eventdata);
    try{
        const updatevent = await axios.post(`${url}/host/event/edit`,{
            "_id":eventdata._id,
            "title" : eventdata.title,
            "description" : eventdata.description,
            "venu" : eventdata.venu,
            "icon" : eventdata.icon ,
            "start_date_time" :eventdata.startdate_time,
            "end_date_time" : eventdata.enddate_time
        })

        return await updatevent
    }
    catch(error){
        console.log(error);
        return await error;
    }
}