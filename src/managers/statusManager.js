import {Check, Clock, PencilSimple, WarningCircle, X} from "@phosphor-icons/react";
import React from "react";

export const getStatusIcon = (statusID) => {
    if (statusID === 0) return {color: 'not_checked', icon: <WarningCircle weight="bold" className="icon_min"/>}
    if (statusID === 1) return {color: 'declined', icon: <X weight="bold" className="icon_min text_lighter"/>}
    if (statusID === 2) return {color: 'exam', icon: <Clock weight="bold" className="icon_min text_lighter"/>}
    if (statusID === 3) return {color: 'pract', icon: <PencilSimple weight="bold" className="icon_min text_lighter"/>}
    if (statusID === 4) return {color: 'lect', icon: <Check weight="bold" className="icon_min text_lighter"/>}
}