const checkLocalStorage = () => {
    let s = localStorage.getItem('theme')
    if (s === null || (s !== 'light' && s !== 'dark')) return 'system'
    return s
}

const isLight = theme => {
    if (theme === 'light') return true
    if (theme === 'dark') return false
    
    // 'system'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
}

const turnOnDarkTheme = () => {
    document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', 'black');
    document
        .querySelector('html')
        .classList.remove('light-theme');
}

const turnOnLightTheme = () => {
    document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#ededed');
    document
        .querySelector('html')
        .classList.add('light-theme');
}


export const themeManager = localConfig => {
    return {

        checkLocalStorage:
            () => checkLocalStorage(),

        setStore:
            (propsValue = null) => {
                let value = propsValue ? propsValue : checkLocalStorage()
                localConfig.setTheme(value)
                localStorage.setItem('theme', value)
            },

        isLight: () => isLight(localConfig.theme),

        setStyle:
            () => {
                const light = () => turnOnLightTheme();
                const dark = () => turnOnDarkTheme();

                isLight(localConfig.theme) ? light() : dark();
            }
    }
}
