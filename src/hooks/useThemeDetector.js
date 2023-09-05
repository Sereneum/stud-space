import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {themeManager} from "../managers/themeManager";

const useThemeDetector = () => {
    const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)')
    const {localConfig} = useContext(Context)
    const [isThemeDetector, setIsThemeDetector] = useState(null)

    lightModeQuery.addEventListener('change', () => {
        if(localConfig.theme === 'system') {
            themeManager(localConfig).setStyle()
            setIsThemeDetector(themeManager(localConfig).isLight())
        }
    })

    return {isThemeDetector}
}

export default useThemeDetector