import './styles/main.css'
import './styles/schedule.css'

import {useContext} from 'react'

import ScrollToTop from './components/scroll_to_top/ScrollToTop'

import Sky from './components/sky/Sky'
import Header from './components/header/Header.js'
import Courses from './components/courses_block/Courses'
import Deadline from './components/deadline_block/Deadline'
import {Context} from './index'
import useApp from './hooks/useApp'
import {observer} from 'mobx-react-lite'
import {themeManager} from './managers/themeManager'
import useThemeDetector from './hooks/useThemeDetector'
import Preloader from './components/preloader/Preloader'
import {CSSTransition} from 'react-transition-group'
import ProjectRoutes from "./routes/ProjectRoutes";

const App = observer(() => {
    const {localConfig} = useContext(Context)


    const {isThemeDetector} = useThemeDetector()

    const {isLoading, isAuth} = useApp()

    if (isLoading)
        return (
            <CSSTransition
                in={isLoading}
                timeout={300}
                classNames='preloader'
                unmountOnExit
            >
                <Preloader/>
            </CSSTransition>
        )


    return (
        <div className='App'>
            <ScrollToTop/>

            {localConfig.sky.value && (
                <Sky isDark={themeManager(localConfig).isDark()}/>
            )}

            <div className='main_container'>
                <Header isAuth={isAuth}/>
                <main className='content_container'>
                    {isAuth && <Courses/>}
                    <ProjectRoutes isAuth={isAuth}/>
                    {isAuth && <Deadline/>}
                </main>
            </div>
        </div>
    )
})

export default App
