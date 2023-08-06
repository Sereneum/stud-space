import React from 'react';
import {assignorIcon, assignorIconDownload} from "../../managers/files_manager";

const TaskFile = ({taskFile}) => {

    let name = taskFile.slice(taskFile.lastIndexOf(`\\`) + 1)
    const download = () => window.open('https://stud.mgri.ru/' + taskFile, '_blank')

    console.log(name)

    return (
        <div className="element_container" onClick={download}>
            <div className="title_container">
                <h3>Файл задания</h3>
            </div>

            <div className="content_cover">
                <div className="content_elem_row select">
                    {assignorIcon(name)}
                    <p className="text_file">{name}</p>
                    {assignorIconDownload(name)}
                </div>
            </div>
        </div>
    );
};

export default TaskFile;