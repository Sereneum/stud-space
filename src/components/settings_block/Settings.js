import {PushPin, PushPinSlash} from "@phosphor-icons/react";
import FixedCourse from "./FixedCourse";
import LooseCourse from "./LooseCourse";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {epoch_fetchConfigurableCourses, epoch_updateActiveCourses} from "../../http/epochServer";
import {preEpoch_saveCourses} from "../../http/preEpoch";
import {observer} from "mobx-react-lite";

const Settings = observer(() => {

    const {user, courseData} = useContext(Context)
    const [active, setActive] = useState([])
    const [pureActive, setPureActive] = useState([])
    const [isDirty, setIsDirty] = useState(false)
    const [passive, setPassive] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // const [isSaveLoading, setIsSaveLoading] = useState(0)

    const id = user.userData.anotherID

    useEffect(() => {
        epoch_fetchConfigurableCourses(id)
            .then(r => {
                setActive(r.active)
                setPureActive(r.active)
                setPassive(r.passive)
                setIsLoading(false)
            })
    }, [id])

    useEffect(() => {
        if(pureActive === active) {
            if(isDirty) setIsDirty(false)
        } else {
            if(!isDirty) setIsDirty(true)
        }
    }, [active])


    if (isLoading) return <>
        <div className="block settings_block">
            <div className="title_container">
                <h1>Настройка курсов</h1>
            </div>
        </div>
    </>

    // const clickOnActive = useCallback(item => {
    //     setPassive([active[item], ...passive])
    //     setActive(active.filter((i, index) => item !== index))
    // }, [active, passive])
    //
    // const clickOnPassive = useCallback(item => {
    //     setActive([...active, passive[item]])
    //     setPassive(passive.filter((i, index) => item !== index))
    // }, [passive])

    // const rename = useCallback((value, localIndex) => {
    //     setActive(active.map((i, mapIndex) =>
    //         mapIndex === localIndex ? {...i, course_name: value} : i
    //     ))
    // }, [active])

    const clickOnActive = item => {
        setPassive([active[item], ...passive])
        setActive(active.filter((i, index) => item !== index))
    }

    const clickOnPassive = item => {
        setActive([...active, passive[item]])
        setPassive(passive.filter((i, index) => item !== index))
    }

    const rename = (value, localIndex) => {
        setActive(active.map((i, mapIndex) =>
            mapIndex === localIndex ? {...i, course_name: value} : i
        ))
    }

    const save = () => {
        // setIsSaveLoading(2)
        preEpoch_saveCourses(courseData.courses, active)
            .then(r => {
                courseData.setCourses(r)
                // setIsSaveLoading(prev => prev - 1)
            })

        epoch_updateActiveCourses(id, active)
            .then(r => {
                // setIsSaveLoading(prev => prev - 1)
            })
    }


    return (
        <div className="block settings_block">
            {/*TITLE*/}
            <div className="title_container">
                <h1>Настройка курсов</h1>
            </div>

            {/*FIXED COURSES BLOCK*/}
            <div className="element_container">

                {/*FIXED COURSES - TITLE*/}
                <div className="title_container">
                    <PushPin weight="fill" className="icon_min"/>
                    <h3>Закреплено</h3>
                </div>

                {/*FIXED COURSES - ITEMS LIST*/}
                {
                    active.map((item, index) => <FixedCourse
                        item={item}
                        key={'a' + item.course_id}
                        choose={() => clickOnActive(index)}
                        localIndex={index}
                        rename={rename}
                    />)
                }
            </div>

            {/*LOOSE COURSES BLOCK*/}
            <div className="element_container">

                {/*LOOSE COURSES - TITLE*/}
                <div className="title_container">
                    <PushPinSlash weight="fill" className="icon_min"/>
                    <h3>Не закреплено</h3>
                </div>

                {/*LOOSE COURSES - ITEMS LIST*/}
                <div className="content_cover">
                    {
                        passive.map((item, index) =>
                            <LooseCourse
                                item={item}
                                isLast={index === passive.length - 1}
                                key={'p' + item.course_id}
                                choose={() => clickOnPassive(index)}
                            />)
                    }
                </div>
            </div>

            {/* SAVE */}
            <div
                className="save_button"
                onClick={save}
                style={{"display": `${isDirty ? '' : 'none'}`}}
            >
                <h4 className="text_lighter">Сохранить изменения</h4>
            </div>
        </div>
    );
})

export default Settings;