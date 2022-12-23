import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientTitle } from "../../../config/clientTitles";
import AppBar from "../../../components/client/appbar/AppBar";
import LotInput from "../../../components/client/lotInput/lotInput";
import BiderCheckInput from "../../../components/client/biderInput/biderInput";

export const Gem = ({setBidder}) => {

    const navigate = useNavigate();
    const [biderInfo, setBiderInfo] = useState(null);
    const [selectedLot, setSelectedLot] = useState(null);

    useEffect(() => {
        if(biderInfo && selectedLot){
            setBidder(biderInfo)
            navigate('/gem/bid')
        }
    }, [biderInfo, navigate, selectedLot])

    return (
        
        <>
            <AppBar 
                titleMm={clientTitle.gem_appbar_title_mm}
                titleEng={clientTitle.gem_appbar_title_en}
            />
            {  biderInfo ?  <LotInput setSelectedLot={setSelectedLot} /> : <BiderCheckInput setBiderInfo={setBiderInfo} /> }

        </>
    );
}