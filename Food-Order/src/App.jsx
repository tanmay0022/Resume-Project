import Header from './Header'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'



function App() {
  return (
    <>
      <Header/> 
      <Outlet/>
{/* <Menu/> */}
    </>
  )
}

export default App
