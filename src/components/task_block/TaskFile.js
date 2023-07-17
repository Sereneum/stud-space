import React from 'react';
import {DownloadSimple, FileZip} from "@phosphor-icons/react";

const TaskFile = ({taskFile}) => {

    let name = taskFile.slice(taskFile.lastIndexOf(`\\`) + 1)
    const download = () => window.open('https://stud.mgri.ru/' + taskFile, '_blank')

    return (
        <div className="element_container" onClick={download}>
            <div className="title_container">
                <h3>Файл задания</h3>
            </div>

            <div className="content_cover">
                <div className="content_elem_row select">
                    <FileZip weight="bold" className="icon_mid" />
                    <p className="text_file">{name}</p>
                    <DownloadSimple weight="bold" className="icon_mid" />
                </div>
            </div>
        </div>
    );
};

export default TaskFile;