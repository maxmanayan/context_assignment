import React, { useEffect, useState } from "react";


export const UserColleaguesContext = React.createContext()


const UserColleaguesProvider = (props) => {
  const [userColleagues, setUserColleagues] = useState()

  useEffect(()=>{
    getData()
  },[])

  const getData = () => {
    setUserColleagues({
      Jim: {id: 1, firstName: 'Jim', lastName: 'Halpert', email: 'j.halpert@dundermifflin.com', jobDescription: 'Sales'},
      Pam: {id: 2, firstName: 'Pam', lastName: 'Beasley', email: 'p.beasley@dundermifflin.com', jobDescription: 'Reception'},
      Kevin: {id: 3, firstName: 'Kevin', lastName: 'Malone', email: 'k.malone@dundermifflin.com', jobDescription: 'Accounting'},
    })
  }

  return(
    <UserColleaguesContext.Provider value={{...userColleagues, setUserColleagues, originalArray: userColleagues}}>
      {props.children}
    </UserColleaguesContext.Provider>
  )
}



export default UserColleaguesProvider;