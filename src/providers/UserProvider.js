import React, { useEffect, useState } from "react";
import avatar from '../components/dwight.png'

export const UserContext = React.createContext()


const UserProvider = (props) => {
  const [user, setUser] = useState()

  useEffect(()=>{
    getData()
  }, [])

  const getData = () => {
    setUser({
      firstName: "Dwight",
      lastName: "Schrute",
      email: "d.schrute@dundermifflin.com",
      jobDescription: "Assistant to the Regional Manager",
      avatar: avatar
    })
  }

  return(
    <UserContext.Provider value={{...user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}


export default UserProvider;