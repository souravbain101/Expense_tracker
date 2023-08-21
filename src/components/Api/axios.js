import axios from "axios";

// // const URL='https://exp-backend-rn98.onrender.com';

// this is local host link
// const URL='http://localhost:8000'

// this is server link
const URL='https://backend-d5zl.onrender.com';

export const register=async(data)=>{
    try {
        
       return await axios.post(`${URL}/register`,data);
      
    } catch (error) {
        console.log("error while calling the api in /register",error);
    }
}

export const Login=async(data)=>{
    try {
        
       return await axios.post(`${URL}/login`,data);
      
    } catch (error) {
        console.log("error while calling the api in /login",error);
    }
}

export const Forget_Password=async(data)=>{
    try {
        
       return await axios.post(`${URL}/send-reset-password`,data);
      
    } catch (error) {
        console.log("error while calling the api in /send-reset-password",error);
    }
}

export const Reset_Password=async(data,id,token)=>{
    try {
        
       return await axios.post(`${URL}/reset-password/${id}/${token}`,data);
      
    } catch (error) {
        console.log("error while calling the api in /reset-password",error);
    }
}

export const Logged_user=async(token)=>{
    try {
       
          const  headers= { authorization: `Bearer ${token}` }
               
       
       return await axios.get(`${URL}/profile`,{headers});
       
      
    } catch (error) {
        console.log("error while calling the api",error);
    }
}


export const ChangePassword=async(data,token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.post(`${URL}/changepassword`,data,{headers});
      
    } catch (error) {
        console.log("error while calling the api",error);
    }
}


export const Refresh_token_api=async(token)=>{
    try {
       
          const  headers= { authorization: `Bearer ${token}` }
               
       
       return await axios.get(`${URL}/refresh_token`,{headers});
       
      
    } catch (error) {
        console.log("error while calling the api",error);
    }
}
export const AddExpenseData=async(data,token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.post(`${URL}/expence/add`,data,{headers});
      
    } catch (error) {
        console.log("error while calling the api in /expence/add",error);
    }
}
export const DeleteExpenseData=async(data,token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.delete(`${URL}/expence/delete`,data,{headers});
      
    } catch (error) {
        console.log("error while calling the api in /expence/delete",error);
    }
}
export const FetchAllExpences=async(token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.get(`${URL}/expence/fetchedata`,{headers});
      
    } catch (error) {
        console.log("error while calling the api in /expence/fetchedata",error);
    }
}

export const FetchDashData=async(token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.get(`${URL}/expence/fetchdashdata`,{headers});
      
    } catch (error) {
        console.log("error while calling the api in /expence/fetchdashdata",error);
    }
}

export const Fetchlastmonthdata=async(token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.get(`${URL}/expence/Fetchlastmonthdata`,{headers});
      
    } catch (error) {
        console.log("error while calling the api in /expence/Fetchlastmonthdata",error);
    }
}

export const FetchTransaction=async(token)=>{
    try {
        const  headers= { authorization: `Bearer ${token}` }
       return await axios.get(`${URL}/expence/FetchTransaction`,{headers});
      
    } catch (error) {
        console.log("error while calling the api in /expence/FetchTransaction",error);
    }
}


