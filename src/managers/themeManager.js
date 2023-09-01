const checkLocalStorage = () => {
    let s = localStorage.getItem('theme')
    if (s === null || (s !== 'light' && s !== 'dark')) return 'system'
    return s
}

const isDark = theme => {
    if (theme === 'light') return false
    if (theme === 'dark') return true

    // 'system'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const turnOnLightTheme = () => {
    document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#ededed');
    document
        .querySelector('html')
        .classList.remove('dark-theme');
}

const turnOnDarkTheme = () => {
    document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', 'black');
    document
        .querySelector('html')
        .classList.add('dark-theme');
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

        isDark: () => isDark(localConfig.theme),

        setStyle:
            () => {
                const light = () => turnOnLightTheme();
                const dark = () => turnOnDarkTheme();

                isDark(localConfig.theme) ? dark() : light();
            }
    }
}
