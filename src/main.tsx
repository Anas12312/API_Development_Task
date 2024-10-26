import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter.tsx'
import { AppProvider } from './context/AppContext.tsx'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
