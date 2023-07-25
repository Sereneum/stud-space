import "./styles/main.css";
import "./styles/schedule.css";

import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import {useContext} from "react";

import ScrollToTop from "./components/scroll_to_top/ScrollToTop";

import Sky from "./components/sky/Sky";
import Header from "./components/header/Header.js"
import CoursesTablet from "./components/courses_block/CoursesTablet";
import DeadlineTablet from "./components/deadline_block/DeadlineTablet";
import Enter from "./components/enter_block/Enter";
import Courses from "./components/courses_block/Courses";
import Deadline from "./components/deadline_block/Deadline";
import Schedule from "./components/schedule_block/Schedule";
import Menu from "./components/menu_block/Menu";
import Course from "./components/course_block/Course";
import Task from "./components/task_block/Task";
import Settings from "./components/settings_block/Settings";
import PrivacyLogged from "./components/privacy_block/PrivacyLogged";
import FaqLogged from "./components/faq_block/FaqLogged";
import {Context} from "./index";
import useApp from "./hooks/useApp";
import PrivacyUnAuth from "./components/privacy_block/PrivacyUnAuth";
import FaqUnAuth from "./components/faq_block/FaqUnAuth";
import {observer} from "mobx-react-lite"
import Loader from "./components/loaders/Loader";

const App = observer(() => {


    const {user, courseData, localConfig} = useContext(Context)
    const location = useLocation();


    const {isLoading, isAuth, firstAuth} = useApp()
    if (isLoading) return <></>

    return (
        <div className="App">

            <ScrollToTop/>

            {localConfig.sky.value && <Sky/>}

            <div className="main_container">

                <Header isAuth={isAuth}/>
                <main className="content_container">

                    {isAuth && <Courses/>}

                    <Routes>

                        {/*LOGIN*/}
                        {!isAuth
                            ? <Route path="/login" element={<Enter firstAuth={firstAuth}/>}/>
                            : <Route path="/login" element={<Navigate to="/" replace/>}/>
                        }


                        <Route path="/privacy" element={<PrivacyUnAuth/>}/>

                        {/*FAQ*/}
                        {!isAuth
                            ? <Route path="/faq" element={<FaqUnAuth/>}/>
                            : <Route path="/faq" element={<FaqLogged/>}/>
                        }

                        {/*PRIVACY*/}
                        {!isAuth
                            ? <Route path="/privacy" element={<PrivacyLogged/>}/>
                            : <Route path="/privacy" element={<PrivacyUnAuth/>}/>
                        }

                        {/*<Route path="/faq" element={<FaqUnAuth/>}/>*/}
                        {/*<Route path="/faq_logged" element={<FaqLogged/>}/>*/}

                        {/* auth */}
                        <Route path="/" element={<Schedule/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/course" element={<Course/>}/>
                        <Route path="/courses" element={<CoursesTablet/>}/>
                        <Route path="/deadlines" element={<DeadlineTablet/>}/>
                        <Route path="/task" element={<Task/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        {/*<Route path="/privacy_logged" element={<PrivacyLogged/>}/>*/}
                        {/*<Route path="/faq_logged" element={<FaqLogged/>}/>*/}

                        {/*Маршруты не авторизованного польховатля*/}


                    </Routes>

                    {isAuth && <Deadline/>}

                </main>
            </div>
        </div>
    );
})

export default App;
