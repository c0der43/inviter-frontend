import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import {CurrentRouteTitleProvider} from "@/app/providers/CurrentRouteNameProvider";
import {StoreProvider} from "@/app/providers/StoreProvider";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <StoreProvider>
              <CurrentRouteTitleProvider>
                  <ThemeProvider>
                          <App />
                  </ThemeProvider>
              </CurrentRouteTitleProvider>
          </StoreProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
