import {
    DownloadSimple,
    ArrowSquareOut,
    LinkSimple,
    FileImage,
    FilePdf,
    FileText,
    FileZip,
    FilePpt,
    FileXls,
    FileDoc,
    File,
    FileJpg
} from "@phosphor-icons/react";
import React from "react";

let list_preview_format = [
    'pdf', 'jpeg', 'jpg', 'png', 'tiff'
]

export const assignorIconDownload = (fileName) => {
    if (!fileName) return <ArrowSquareOut weight="bold" className="icon_mid"/>
    else {
        let format_file = fileName.slice(fileName.lastIndexOf('.') + 1)
        if (list_preview_format.find(e => e === format_file) !== undefined)
            return <ArrowSquareOut weight="bold" className="icon_mid"/>
        else
            return <DownloadSimple weight="bold" className="icon_mid"/>
    }
}

export const assignorIcon = (fileName) => {
    if (!fileName) return <LinkSimple weight="bold" className="icon_mid" />
    let format = fileName.slice(fileName.lastIndexOf('.') + 1)

    switch (format) {
        case 'xlsx':
            return <FileXls weight="bold" className="icon_mid" />
        case 'xls':
            return <FileXls weight="bold" className="icon_mid" />
        case 'docx':
            return <FileDoc weight="bold" className="icon_mid" />
        case 'doc':
            return <FileDoc weight="bold" className="icon_mid" />
        case 'pdf':
            return <FilePdf weight="bold" className="icon_mid" />
        case 'pptx':
            return <FilePpt weight="bold" className="icon_mid" />
        case 'ppt':
            return <FilePpt weight="bold" className="icon_mid" />
        case 'zip':
            return <FileZip weight="bold" className="icon_mid" />
        case 'png':
            return <FileImage weight="bold" className="icon_mid" />
        case 'jpeg':
            return <FileJpg weight="bold" className="icon_mid" />
        case 'tiff':
            return <FileImage weight="bold" className="icon_mid" />
        case 'jpg':
            return <FileJpg weight="bold" className="icon_mid" />
        case 'txt':
            return <FileText weight="bold" className="icon_mid" />
        default:
            return <File weight="bold" className="icon_mid" />
    }
}

export const handleDownload = (fileName, link, fileID=null) => {
    if(!fileName) {
        window.open(link)
        return
    } else {
        const baseUrl = 'https://stud.mgri.ru';
        const url = baseUrl + `/api/ElectronicEducation/Files/download?fileID=${fileID}`
        window.open(url, '_blank')
        return;
    }

    let url = `https://stud.mgri.ru${link}`
    let format_file = url.slice(url.lastIndexOf('.') + 1)

    if(list_preview_format.find(e => e === format_file) !== undefined)
        window.open(url, '_blank')
    else
        window.location.href = url
};
