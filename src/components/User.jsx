import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const User = () => {
    
    const params = useParams();
    const navigation = useNavigate();
    
    console.log(params.id);

  return (
    <>
    <div>User</div>
    <button onClick={()=>navigation("about")}>
        Click Me
    </button>
    </>
  )
}

export default User