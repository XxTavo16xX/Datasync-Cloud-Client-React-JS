// import IAwallpaper from '/wallpapers/IA_Modern_Landscape.png'


export const getDekstopPreferences = () => {

    return new Promise(async resolve => {

        const localContext = JSON.parse(localStorage.getItem('desktopPreferences'))

        if (!localContext) {

            const defaultDesktopPreferences = {
                desktopWallpaperURL: "default"
            }

            resolve(defaultDesktopPreferences)
            return

        }

    })

}

const getRandomWallpaper = () => {

    return new Promise(resolve => {

        resolve()

    })

}