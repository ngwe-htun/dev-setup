import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import AppBar from "../../../components/client/appbar/AppBar";
import BiderCheckInput from "../../../components/client/biderInput/biderInput";
import LotInput from "../../../components/client/lotInput/lotInput";
import { clientTitle } from "../../../config/clientTitles";

export const PureGold = () => {
    
    const navigate = useNavigate();
    const categoryId = useOutletContext();

    // States
    const [bider, setBider] = useState('');
    const [lotNo, setLotNo] = useState('');

    useEffect(() => {
        console.log(bider);
        if (bider && lotNo) {
            navigate('/puregold/bid', {
                "state": {
                    "categoryId": categoryId,
                    "bider": bider,
                    "lotInfo": lotNo
                }
            });
        }
    }, [bider, lotNo]);
    
    return (
        <>
            {/** App bar */}
            <AppBar 
                titleMm={clientTitle.pure_gold_appbar_title_mm}
                titleEng={clientTitle.pure_gold_appbar_title_en}
            />
            {bider 
                ? <LotInput setSelectedLot={setLotNo} /> 
                : <BiderCheckInput setBider={setBider}/>
            }
        </>
    );
}