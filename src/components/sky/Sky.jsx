import React, {useRef, useEffect, useState, useContext} from 'react';
import {useMediaQuery} from "react-responsive";
import {Context} from "../../index";
import DarkSky from "./DarkSky";
import LightSky from "./LightSky";

const Sky = ({isDark}) => {

    return <>
        {isDark ? <DarkSky/> : <LightSky/>}
    </>
}

export default Sky;