import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SidebarWithHeader from './components/SidebarWithHeader'
import NotFound from './pages/NotFound'

const colors = {}

const theme = extendTheme({ colors })

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={ui(<NotFound />)}>
      <Route path='/schoonmaak' element={<App />} />
    
      <Route path='/auth' element={<App />}>

      </Route>
    </Route>
  )
)

function ui(node: React.ReactNode) {
  return <SidebarWithHeader>{node}</SidebarWithHeader>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
