
// * Dependencies Required 

import React from 'react'
import ReactDOM from 'react-dom/client'

// * Modules Required

import { AppProvider } from './app/system/context'

// * view Styles

import './index.css'

// * Components Required

import DesktopView from './app/views/DesktopView'

// * view to Return

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>

      <DesktopView />


    </AppProvider>
  </React.StrictMode>,
)