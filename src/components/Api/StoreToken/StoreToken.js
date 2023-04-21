const Storetoken=(key,value)=>{
   
    localStorage.setItem(key,value);
}

const Gettoken=()=>{
   let token= localStorage.getItem('access_token');
   return token;
}

const Removetoken=(token)=>{
localStorage.removeItem(token);
}

export {Storetoken,Gettoken,Removetoken};