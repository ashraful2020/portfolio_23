import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' 
import './App.scss'
import { Provider } from './hooks/contextAPI'
import './utils/templateThemeColor.scss'
const root = createRoot(document.getElementById('root'))

root.render(
  <Provider>
    <App />
  </Provider>
)
