import React from 'react';
import {Moon, StarAndCrescent, Sun} from "@phosphor-icons/react";

const MenuThemeBlock = () => {

    return (
        <div className="content_cover">
            <div className="content_elem_column">
                <p>Оформление</p>
                <div className="container_row_start">

                    <div className="theme_item_container">
                        <div className="theme_circle">
                            <Sun weight="bold" className="icon_big"/>
                        </div>
                        <p className="theme_text">Светлое</p>
                    </div>

                    <div className="theme_item_container">
                        <div className="theme_circle">
                            <Moon weight="bold" className="icon_big"/>
                        </div>
                        <p className="theme_text">Тёмное</p>
                    </div>

                    <div className="theme_item_container">
                        <div className="theme_circle enabled_invert">
                            <StarAndCrescent weight="bold" className="icon_big"/>
                        </div>
                        <p className="theme_text theme_enabled_text">Системное</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MenuThemeBlock;