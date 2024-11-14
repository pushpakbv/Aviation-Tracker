import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import AddFlight from './components/AddFlight.jsx'
import GetFlight from './components/GetFlight.jsx'
import EditFlight from './components/EditFlight.jsx'
import HomePage from './components/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        loader: githubInfoLoader,
        path: 'github',
        element:<Github/>
      },
      {
        
        path: 'user/:id',
        element:<User/>
      },
      {
        path: 'add-flight',
        element: <AddFlight/>
      },
      {
        path: 'edit-flight/:id',
        element: <EditFlight/>
      },
      {
        path: 'flight-list',
        element: <GetFlight/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
