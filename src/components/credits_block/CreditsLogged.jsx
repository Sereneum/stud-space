import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import CreditsContent from './CreditsContent'

const CreditsLogged = () => {
    const navigate = useNavigate()
    
    return ( 
        <div className="block">

            <div className="title_container back_container" onClick={() => navigate(-1)}>
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Авторы</h2>
            </div>

            <CreditsContent />

        </div>
     );
}
 
export default CreditsLogged;