import React, {useState} from 'react';
import {Plus} from "@phosphor-icons/react";
import SolutionFile from "./SolutionFile";
import SolutionModal from "./SolutionModal";


/* Блок с решением задания (прикрепление + уже прикрепленные файлы) */
const Solution = ({files, parameters, loadingTaskData, isSuccess}) => {

    const [isModal, setIsModal] = useState(false)
    const setModal = () => setIsModal(prev => !prev)

    return (
        <div className="element_container">
            <div className="title_container">
                <h3>Решение</h3>
            </div>

            <div className="content_cover">

                {/* Прикрепленные файлы */}
                {
                    files.map(file => <SolutionFile
                        file={file}
                        key={file.fileID}
                        isSuccess={isSuccess}
                        loadingTaskData={loadingTaskData}
                    />)
                }

                {/* Открыть модалку */}
                <div onClick={setModal} className="content_elem_row select">
                    <Plus weight="bold" className="icon_min" height={"24px"}/>
                    <p>Добавить</p>
                </div>

                {/* Модалка, куда прикрепляются курсы */}
                <SolutionModal
                    isModal={isModal}
                    setModal={setModal}
                    loadingTaskData={loadingTaskData}
                    parameters={parameters}
                />
            </div>
        </div>
    );
};

export default Solution;