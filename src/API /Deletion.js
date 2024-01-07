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