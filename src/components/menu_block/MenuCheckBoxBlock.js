import React, {useContext, useState} from 'react';
import MenuCheckBoxItem from "./MenuCheckBoxItem";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const MenuCheckBoxBlock = observer(() => {

    const {localConfig} = useContext(Context)
    const config = [
        {obj: {...localConfig.sky}, setter: obj => localConfig.setSky(obj)},
        {obj: {...localConfig.msg}, setter: obj => localConfig.setMsg(obj)}
    ]

    const set = index => {
        let newValue = !config[index].obj.value
        localStorage.setItem(config[index].obj.key, '' + Number(newValue))
        config[index].setter({...config[index].obj, value: newValue})
    }


    return (
        <div className="content_cover">
            {
                config.map((item, index) => <MenuCheckBoxItem
                    item={item.obj}
                    key={`s${index}`}
                    isLast={index === config.length - 1}
                    set={() => set(index)}
                />)
            }
        </div>
    );
})

export default MenuCheckBoxBlock;