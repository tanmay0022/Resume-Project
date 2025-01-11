import Header from './Header'
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
import { useState ,useEffect} from 'react';
import  appStore from './utils/appStore';
import { Provider } from 'react-redux';


function App() {

const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const data = {
      name:""
    }
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName}}>
    <>
      <Header/> 
      <Outlet/>

    </>
    </UserContext.Provider>
    </Provider>
  )
}

export default App
