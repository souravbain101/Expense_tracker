import axios from "axios";

const URL='http://localhost:8000';
export const register=async(data)=>{
    try {
        
       return await axios.post(`${URL}/register`,data);
      
    } catch (error) {
        console.log("error while calling the api",error);
    }
}

export const Login=async(data)=>{
    try {
        
       return await axios.post(`${URL}/login`,data);
      
    } catch (error) {
        console.log("error while calling the api",error);
    }
}