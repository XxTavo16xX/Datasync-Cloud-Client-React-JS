
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../system/context'

// * view Styles

import './styles/DesktopView.css'

// * Components Required

// * view to Return

const DesktopView = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.system.app_view_mode == 'Windows') {

        return (

            <div className="Desktop-View">

                

            </div>

        )

    }

}

export default DesktopView