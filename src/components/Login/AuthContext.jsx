import React,{createContext, useState} from 'react'

export const authContext = createContext()

export default function AuthProvider({children}) {

    const [user,setUser] = useState({
        id:"",
        name:"",
        logged:false
    })

  return (
    <authContext.Provider value={{
        user,setUser
    }}>
        {children}
    </authContext.Provider>
  )
}
