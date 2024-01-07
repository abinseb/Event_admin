import axios from "axios";
import { URL_Fetch } from "./URL_Fetch";

const url = URL_Fetch();
const eventid = localStorage.getItem("eventid");

export const DashboardDataFetch=async()=>{
    try{
        const DashboardData = await axios.get(`${url}/host/dashboard/${eventid}`)
        console.log("Dashboarddataa",DashboardData.data);
        return await DashboardData.data;
    }
    catch(error){
        console.error("Error",error);
    }
}


export const WorkshopDataFetch=async()=>{
    try{
        const workshopData = await axios.get(`${url}/host/workshop/get/byEvent/${eventid}`);
        console.log("Workshop data",workshopData.data);
        return await workshopData.data;
        
    }
    catch(error){
        console.error(error);

    }
}

export const eventDataFetch_Single=async()=>{
    try{
        const event = axios.get(`${url}/host/event/details/${eventid}`)
        console.log("Eventlist",event);
        return await event;
    }
    catch(error){
        console.error(error);
    }
}