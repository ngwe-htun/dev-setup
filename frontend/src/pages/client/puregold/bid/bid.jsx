import { clientTitle } from "../../../../config/clientTitles";
import { ClientBack } from "../../../../components/client/back/back";
import { BidRegField } from "../../../../components/client/bid/bidReg/bidRegField";
import { PriceField } from "../../../../components/client/bid/price/price";
import { NameSig } from "../../../../components/client/bid/nameSig/nameSig";
import { useState } from "react";
import { SubmitButton } from "../../../../components/client/submit/submit";
import { useOutletContext } from "react-router-dom";
import { LotNoField } from "../../../../components/client/bid/lotNo/lotField";
import { TwoShowField } from "../../../../components/client/common/twoshow/twoShow";

// BID PURE GOLD
export const BidPureGold = () => {

    // Consts
    const bider = useOutletContext()?.bider;
    const lotNo = useOutletContext()?.lotNo;
    const categoryId = useOutletContext()?.categoryId;

    // States
    const [offerPrice, setOfferPrice] = useState('');
    const [offerPriceInWord, setOfferPriceInWord] = useState('');

    // BID
    const bidGoldBar = async () => {
        
    }
    
    return (
        <>
            {/** Back */}
            <ClientBack label={{
                "mm": clientTitle.pure_gold_appbar_title_mm,
                "en": clientTitle.pure_gold_appbar_title_en
                }}
                path={"/"}
            />
            <LotNoField lotNo={lotNo} /> 
            {/** Readonly reg */}
            <BidRegField bidRegNo={bider.bider_reg_number} />
            {/** BidPrice */}
            <PriceField 
                reserveLabel={clientTitle.bid_reserve_price_kyat}
                offerLabel={clientTitle.bid_offer_price_kyat}
                offerInWordTitle={clientTitle.bid_offer_price_word_kyat}
            />
            {/** Name/Sig */}
            <NameSig data={bider.name}/>
            {/** Company/Country */}
            <TwoShowField 
                firstInput={{
                    "label": clientTitle.company_label,
                    "data" : bider.company
                }}
                secondInput={{
                    "label": clientTitle.country_label,
                    "data" : bider.country
                }}
            />

            <SubmitButton 
                fields={true}
                callBack={bidGoldBar}
            />
        </>
    );
}