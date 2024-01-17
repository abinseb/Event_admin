import axios from "axios";
import { URL_Fetch } from "./URL_Fetch";

const url = URL_Fetch();

export const Delete_Workshop=async(workshopid)=>{
    try{
        console.log(`${url}/host/workshop/delete/${workshopid}`)
        const deleteResponse = await axios.post(`${url}/host/workshop/delete/${workshopid}`);
        console.log(deleteResponse);
        return await deleteResponse.status;
    }
    catch(err){
        console.error("Error in delete workshop",err);
        console.log(`${url}/host/workshop/delete/${workshopid}`)
    }

}

export const DeleteEventFromDB=async(eventid)=>{
    console.log("eventid delete",eventid)
    try{
        const eventdelete = await axios.post(`${url}/host/event/`,{
          
                "id" :eventid
         
        })
        console.log("Delete",eventdelete);
        return await eventdelete;
    }
    catch(error){
        console.error(error);
        return error
    }
}