
const Verifytoken=(token)=>{
 const exp=token.exp;
 if (Date.now() >= exp * 1000){
  return false;
 }
 else{
  return true;
 }

}
export default Verifytoken;
