import React, { useState } from 'react'
import { Home } from '../HomePage/Home'
import { DashBoard } from "../DashBoard/DashBoard.jsx"

export function VerificarUser() {
    let [user, setUser] = useState(false)

    const Login = () => {
        setUser(user = true)
      }
    
      const Logout = () => {
        setUser(user = false)
      }

      if (user) {
        return (
          <DashBoard Logout={Logout}/>
        )
      } else {
          return (
              <div className='conteinerHome'>
                  <Home btnLogin={Login} />
              </div>
          )
      }
}
