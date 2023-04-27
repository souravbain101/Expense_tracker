const Storetoken=(key,value)=>{
   
    localStorage.setItem(key,value);
}

const Gettoken=()=>{
   let token= localStorage.getItem('access_token');
   return token;
}
const Get_Refresh_token=()=>{
    let token= localStorage.getItem('refresh_token');
    return token;
 }
 

const Removetoken=(token)=>{
localStorage.removeItem(token);
}

export {Storetoken,Gettoken,Removetoken,Get_Refresh_token};