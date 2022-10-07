import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Client, Databases, Account } from 'appwrite'
import { ChakraProvider, extendTheme, theme as origTheme } from '@chakra-ui/react'
import SidebarWithHeader from './components/SidebarWithHeader'

const api = new Client()

api
  .setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

const db = new Databases(api)
const account = new Account(api)

window.api = api
window.db = db
window.account = account

const chakraTheme = extendTheme({ 
  fonts: {
    heading: 'monospace'
  },
  components: {
    Alert: {
      variants: {
        solid: (props: any) => {
          const { colorScheme } = props
          if (colorScheme !== "blue") {
            // @ts-ignore
            return origTheme.components.Alert.variants.solid(props)
          }
          return {
            container: {
              bg: `purple.500`,
            },
          }
        }
      }
    }
  }
})

function ui(node: () => JSX.Element) {
  return <SidebarWithHeader>{node()}</SidebarWithHeader>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <App/>
    </ChakraProvider>    
  </React.StrictMode>
)
