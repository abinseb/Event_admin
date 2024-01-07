import axios from "axios";
import { URL_Fetch } from "./URL_Fetch";

const url = URL_Fetch();

export const Host_Login =async(email,password)=>{
    try{
        const loginHost = await axios.post(`${url}/auth/login`,{
            
                "email" :email ,
                "password" :password
              })
        return await loginHost;
    }
    catch(error){
        // console.error(error);
        if(error.response && error.response.status === 401)
        {
            console.log('Unauthorized error:', error);
            return await error.response;
        }
    }
}