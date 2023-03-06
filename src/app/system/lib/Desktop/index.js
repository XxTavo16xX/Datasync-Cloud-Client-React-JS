
export const getDekstopPreferences = () => {

    const localContext = JSON.parse(localStorage.getItem('desktopPreferences'))

    if(localContext) return {}

}