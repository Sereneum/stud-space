import { PencilSimple, PushPin, PushPinSlash } from "@phosphor-icons/react";

const Settings = () => {
    return (
        <div className="block settings_block">
            <div className="title_container">
                <h1>Настройка курсов</h1>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <PushPin weight="fill" className="icon_min" />
                    <h3>Закреплено</h3>
                </div>

                <div className="content_cover">
                    <div className="content_elem_column">
                        <h3>Сейсморазведка</h3>
                        <div className="container_row_start">
                            <div className="button_settings edit"> 
                                <PencilSimple weight="bold" className="icon_min" />
                                <p className="text_min">Изменить</p>
                            </div>
                            <div className="button_settings unpin">
                                <PushPinSlash weight="bold" className="icon_min red" />
                                <p className="text_min red">Открепить</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content_cover">
                    <div className="content_elem_column">
                        <h3>Магниторазведка</h3>
                        <div className="container_row_start">
                            <div className="button_settings edit"> 
                                <PencilSimple weight="bold" className="icon_min" />
                                <p className="text_min">Изменить</p>
                            </div>
                            <div className="button_settings unpin">
                                <PushPinSlash weight="bold" className="icon_min red" />
                                <p className="text_min red">Открепить</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="element_container">
                <div className="title_container">
                    <PushPinSlash weight="fill" className="icon_min" />
                    <h3>Не закреплено</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_row select">
                        <p>Базы данных</p>
                        <PushPin weight="bold" className="icon_min" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <p>Месторождения полезных ископаемых (ПИ-20)</p>
                        <PushPin weight="bold" className="icon_min" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <p>Программно-аппаратный комплекс в гравиразведке</p>
                        <PushPin weight="bold" className="icon_min" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <p>Программно-аппаратный комплекс в радиометрии (ПИ-20)</p>
                        <PushPin weight="bold" className="icon_min" />
                    </div>

                </div>
            </div>
            
            <div className="save_button">
                <h4 className="text_lighter">Сохранить изменения</h4>
            </div>
        </div>
    );
}

export default Settings;