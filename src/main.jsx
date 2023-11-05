import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Providers/AuthProviders.jsx'
import router from './Routes/PublicRoute.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <ThemeProvider>
    <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </ThemeProvider>
  </AuthProviders>
)
