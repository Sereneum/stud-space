import React, {useContext} from 'react';
import {Context} from "../../index";

const MenuCheckBoxItem = ({item, isLast, set}) => {

    return (
        <>
            <div className="content_elem_row">
                <p>{item.text}</p>
                <div className="switcher_body" onClick={set}>
                    <div className={`switcher ${item.value && 'active-switcher'}`}></div>
                </div>
            </div>

            {!isLast && <div className="breaker"></div>}
        </>
    );
};

export default MenuCheckBoxItem;