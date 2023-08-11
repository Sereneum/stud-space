import React, {useRef, useEffect, useState, useContext} from 'react';
import {useMediaQuery} from "react-responsive";
import {Context} from "../../index";
import DarkSky from "./DarkSky";
import LightSky from "./LightSky";
import LightStars from './LightStars'

const Sky = ({isDark}) => {

    return <>
        {isDark ? <DarkSky/> : <LightStars/>}
    </>
}

export default Sky;