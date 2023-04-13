import React, { useEffect, useState } from 'react';


function CrimeDetails(){

  const [user,setUser]= useState({
    location:"",
    description:""
  })
  
    let name,value;

    const handleInputs =(e)=>{
        
        
        name= e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})


    }

    const PostData=async(e)=>{
      e.preventDefault();
      const {location,description}=user
      let myuser=JSON.stringify(user)

      const res= await fetch('http://localhost:5000/crimedetails',{
          method:"POST",
          headers:{
              "Content-Type" : "application/json",
              "Access-Control-Allow-Origin":  "http://localhost:5000",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Headers": "Content-Type, Authorization"
          },
          body:myuser

      });
  
}
    
    return(
        <div className="crimedeets">
            <form>
                <label>Location:</label>
                <input type="text" id="location" name="location" value={user.location}
                 onChange={handleInputs}
                        />
                
                <label>Description:</label>
                <textarea id="description" name="description" value={user.description}
                 onChange={handleInputs}
                        ></textarea>
                
                <button type="submit" onClick={PostData}>Submit</button>
            </form>
        </div>
    )

}

export default CrimeDetails;