import { useEffect, useState } from "react";
import { clientTitle } from "../../../config/clientTitles";
import AppBar from "../../../components/client/appbar/AppBar";
import { useNavigate, useOutletContext } from "react-router-dom";
import LotInput from "../../../components/client/lotInput/lotInput";
import BiderCheckInput from "../../../components/client/biderInput/biderInput";

// BID JADE
export const Jade = () => {
    
    // Constants
    const nav = useNavigate();
    const categoryId = useOutletContext();

    // States
    const [bider, setBider] = useState('');
    const [lotInfo, setLotInfo] = useState('');

    // HOOK
    useEffect(() => {
        if (bider && lotInfo) {
            nav('/jade/bid', {
                "state": {
                    "categoryId": categoryId,
                    "bider": bider,
                    "lotInfo": lotInfo
                }
            });
        }
    }, [bider, lotInfo, categoryId, nav]);

    return (
        <>
            <AppBar 
                titleMm={clientTitle.jade_appbar_title_mm}
                titleEng={clientTitle.jade_appbar_title_en}
            />
            {bider 
                ? <LotInput setSelectedLot={setLotInfo} /> 
                : <BiderCheckInput setBider={setBider}/>
            }
        </>
    );
}