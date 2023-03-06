
// * Dependencies Required 

import { useContext, useState, useEffect } from "react";

// * Modules Required

import { AppContext } from '../system/context'
import { getDekstopPreferences } from "../system/lib/desktop";

// * view Styles

import './styles/DesktopView.css'

// * Components Required

import DesktopViewWallpaper from '../components/Desktop/DesktopViewWallpaper'
import IAWallpaper from '/wallpapers/IA_Modern_Landscape.png'

// * view to Return

const DesktopView = () => {

    const { context, setContext } = useContext(AppContext)
    const [desktopPreferences, setDesktopPreferences] = useState([])

    // * Getting DesktopPreferences

    useEffect(() => {

        getDekstopPreferences().then(desktopPreferencesReceived => { setDesktopPreferences(desktopPreferencesReceived) })

    }, [])

    if (context.system.app_view_mode == 'Windows') {

        return (

            <div className="Desktop-View-Container">

                <DesktopViewWallpaper desktopWallpaperURL={desktopPreferences.desktopWallpaperURL} />

            </div>

        )

    }

}



export default DesktopView