import { URL_Fetch } from "./URL_Fetch";
import axios from "axios";


const url = URL_Fetch();

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