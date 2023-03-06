
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

const initOS = () => {

  const rootView = document.getElementById('root')

  setTimeout(() => { rootView.style.opacity = '0' }, 200)

  setTimeout(() => {

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <AppProvider>

          <DesktopView />


        </AppProvider>
      </React.StrictMode>,
    )

    setTimeout(() => { rootView.style.opacity = '1' }, 200)

    setTimeout(() => { rootView.style.transition = '0s' }, 400)

  }, 600)

}

initOS()