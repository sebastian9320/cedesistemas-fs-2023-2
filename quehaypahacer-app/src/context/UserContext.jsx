import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../utils/TokenLocalStorage";
import { httpRequest } from "../utils/HttpRequest";

const defaultState = {
  name: '',
  email: '',
  phone: '',
  document: '',
  isAuth: false,
}

export const UserContext = createContext(defaultState)

export const UserContextStore = props => {

  const [user, setUser] = useState(defaultState);

  const authUser = (userData) => {
    setUser({
      ...userData,
      isAuth: true
    })
  }

  const validateSession = () => {
    const token = getToken()
    if(token && !user.isAuth){
      requestUser(token)
    }
  }

  const requestUser = async (token) => {
    try{
      const response = await httpRequest({
        endpoint: '/users/info',
        token
      })
      const {data} = response
      authUser(data);
    }catch(error){
      logOut()
    }
  }

  const logOut = () => {
    setUser(defaultState)
    removeToken()
  }

  return (
    <UserContext.Provider value={{ user, validateSession, logOut }} >
      {props.children}
    </UserContext.Provider>
  )
}
