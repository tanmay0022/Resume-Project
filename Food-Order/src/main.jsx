import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import Body from './Body.jsx'
import Menu from './Menu'
import Cart from './Cart'
import Home from './Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Menu',
        element: <Body />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'Restaurant/:id',
        element: <Menu />,
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
