// Challenge #2 - https://gorest.co.in/public/v2/users
// We need to check the number of male and female users in both active aswell as inactive status
// Using axios for fetching data is always preferred
const axios=require('axios')
let survey={}
 const fetch=async()=>{
    const res=await axios.get("https://gorest.co.in/public/v2/users")
    
    const data=res.data
    for(let val of data){
        survey[val.status]=(survey[val.status]|| 0)+1
        survey[val.gender]=(survey[val.gender]|| 0)+1
        
    }
   console.log(survey)
 
 }
 fetch()

