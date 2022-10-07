import { Client, Databases, Account } from 'appwrite'

declare global {
  interface Window {
    api: Client
    db: Databases
    account: Account
  }

  interface ImportMetaEnv {
    VITE_APPWRITE_PROJECT_ID: string
    VITE_APPWRITE_API_ENDPOINT: string
    VITE_APPWRITE_COLLECTION_ID: string

    VITE_APP_NAME: string
    VITE_APP_SHORT_NAME: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}