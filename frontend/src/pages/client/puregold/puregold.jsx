import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AppBar from "../../../components/client/appbar/AppBar";
import BiderCheckInput from "../../../components/client/biderInput/biderInput";
import { clientTitle } from "../../../config/clientTitles";

export const PureGold = () => {
    
    const navigate = useNavigate();

    // States
    const [bider, setBider] = useState('');

    useEffect(() => {
        if (bider) {
            navigate('/puregold/bid');
        }
    }, [bider]);
    
    return (
        <>
            <AppBar 
                titleMm={clientTitle.pure_gold_appbar_title_mm}
                titleEng={clientTitle.pure_gold_appbar_title_en}
            />
            <BiderCheckInput setBider={setBider}/>
        </>
    );
}