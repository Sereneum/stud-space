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
                const htmlElement = document.querySelector('html')
                const light = () => htmlElement.classList.remove('dark-theme')
                const dark = () => htmlElement.classList.add('dark-theme')
                isDark(localConfig.theme) ? dark() : light()
            }
    }
}
