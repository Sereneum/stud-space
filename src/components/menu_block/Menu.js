import {
    UsersThree,
    At,
    Sun,
    Moon,
    StarAndCrescent,
    GearFine,
    CaretRight,
    ArrowSquareOut,
    AsteriskSimple,
    Question,
    LinkSimple,
    GlobeSimple
} from "@phosphor-icons/react";

import {NavLink} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {epoch_getMinorUserData} from "../../http/epochServer";
import MenuCheckBoxItem from "./MenuCheckBoxItem";
import MenuThemeBlock from "./MenuThemeBlock";
import MenuCheckBoxBlock from "./MenuCheckBoxBlock";


const Menu = () => {

    const {user} = useContext(Context)
    const id = user.userData.anotherID
    const [isLoading, setIsLoading] = useState(true)

    const logout = () => {
        user.setIsAuth(false)
        localStorage.setItem('token', '')
        window.location.reload()
    }

    const minor = async () => {
        if (!Object.keys(user.minorUserData).length)
            await epoch_getMinorUserData(id)
                .then(r => user.setMinorUserData(r.data.data))
    }

    useEffect(() => {
        minor().then(() => {
            console.log(user.minorUserData)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <div className="block">
        <div className="title_container">
            <h1>Меню</h1>
        </div>
    </div>

    return (
        <div className="block">
            <div className="title_container">
                <h1>Меню</h1>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Профиль</h3>
                </div>
                <div className="content_cover">
                    <div className="content_elem_column">
                        <h3>{user.minorUserData.fullName}</h3>
                        <div className="column_container_mini low_opacity">
                            <div className="container_row_start">
                                <UsersThree weight="bold" className="icon_min"/>
                                <p>{user.minorUserData.group.item1}</p>
                            </div>
                            <div className="container_row_start">
                                <At weight="bold" className="icon_min"/>
                                <p>{user.minorUserData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Настройки</h3>
                </div>

                <MenuThemeBlock/>

                <MenuCheckBoxBlock/>

                <div className="content_cover">
                    <NavLink to="/settings" className="content_elem_row select">
                        <GearFine weight="bold" className="icon_mid"/>
                        <p>Настроить курсы</p>
                        <CaretRight weight="bold" className="icon_mid"/>
                    </NavLink>
                </div>

            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Дополнительно</h3>
                </div>

                <div className="content_cover">

                    <NavLink to="/faq" className="content_elem_row select">
                        <Question weight="bold" className="icon_mid"/>
                        <p>Помощь и возможности</p>
                        <CaretRight weight="bold" className="icon_mid"/>
                    </NavLink>

                    <div className="breaker"></div>

                    <NavLink to="/privacy" className="content_elem_row select">
                        <AsteriskSimple weight="bold" className="icon_mid"/>
                        <p>Политика конфиденциальности</p>
                        <CaretRight weight="bold" className="icon_mid"/>
                    </NavLink>

                    <div className="breaker"></div>

                    <NavLink to="https://mgri.ru" target="_blank" rel="noreferrer" className="content_elem_row select">
                        <LinkSimple weight="bold" className="icon_mid"/>
                        <p>Веб-сайт МГРИ</p>
                        <ArrowSquareOut weight="bold" className="icon_mid"/>
                    </NavLink>

                    <div className="breaker"></div>

                    <NavLink to="https://stud.mgri.ru" target="_blank" rel="noreferrer"
                             className="content_elem_row select">
                        <GlobeSimple weight="bold" className="icon_mid"/>
                        <p>Электронно-образовательная платформа</p>
                        <ArrowSquareOut weight="bold" className="icon_mid"/>
                    </NavLink>

                </div>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Авторы</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_column">
                        <div className="container_column_start">
                            <p>Романов Максим</p>
                            <p className="low_opacity">Backend, Frontend Developing</p>
                        </div>
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_column">
                        <div className="container_column_start">
                            <p>Могильников Михаил</p>
                            <p className="low_opacity">Web-design, UI/UX, Frontend Developing</p>
                        </div>
                    </div>

                </div>

                <div className="title_container">
                    <p className="bottom_text">Группа: ПИ-20 <br/> Кафедра информатики и геоинформационных систем <br/>
                        <br/> Российский государственный геологоразведочный университет имени Серго Орджоникидзе</p>
                </div>

            </div>

            <div onClick={logout} className="exit_button">
                <h3 className="exit_text">Выйти</h3>
            </div>

        </div>
    );
}

export default Menu;