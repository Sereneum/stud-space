import { DownloadSimple, ArrowSquareOut, LinkSimple, FileImage, FilePdf, FileText, FileZip, FilePpt, FileXls, FileDoc, File } from "@phosphor-icons/react";
import Material from "./Material";

const Materials = ({items}) => {


    return (
        <div className="element_container">
            <div className="title_container">
                <h3>Материалы курса</h3>
            </div>

            <div className="content_cover">

                {
                    items.map((item, index) => <Material
                        item={item}
                        isBreaker={index !== items.length - 1}
                        key={`m_${index}`}/>)
                }

                {/*<div className="content_elem_row select">*/}
                {/*    <FileImage weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">picture.png</p>*/}
                {/*    <ArrowSquareOut weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <FilePdf weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">test.pdf</p>*/}
                {/*    <ArrowSquareOut weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <LinkSimple weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">website link</p>*/}
                {/*    <ArrowSquareOut weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <FileText weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">text_file.txt</p>*/}
                {/*    <DownloadSimple weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <FileZip weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">archive.zip</p>*/}
                {/*    <DownloadSimple weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <FilePpt weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">presentation.ppt</p>*/}
                {/*    <DownloadSimple weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <FileXls weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">excel_file.xls</p>*/}
                {/*    <DownloadSimple weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <FileDoc weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">document.doc</p>*/}
                {/*    <DownloadSimple weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

                {/*<div className="breaker"></div>*/}

                {/*<div className="content_elem_row select">*/}
                {/*    <File weight="bold" className="icon_mid" />*/}
                {/*    <p className="text_file">unknown_format.css</p>*/}
                {/*    <DownloadSimple weight="bold" className="icon_mid" />*/}
                {/*</div>*/}

            </div>
        </div>
    );
}

export default Materials;