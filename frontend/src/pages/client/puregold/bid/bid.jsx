import { clientTitle } from "../../../../config/clientTitles";
import { ClientBack } from "../../../../components/client/back/back";
import { BidRegField } from "../../../../components/client/bid/bidReg/bidRegField";
import { PriceField } from "../../../../components/client/bid/price/price";
import { NameSig } from "../../../../components/client/bid/nameSig/nameSig";
import { NrcField } from "../../../../components/client/nrc/nrc";
import { useState } from "react";
import { AddressField } from "../../../../components/client/address/address";
import { PhoneField } from "../../../../components/client/phone/phone";
import { SubmitButton } from "../../../../components/client/submit/submit";

export const BidPureGold = ({biderRegNo}) => {

    // States
    const [nrc, setNrc] = useState('');

    // BID
    const bidGoldBar = () => {
        console.log('BID');
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
            {/** Readonly reg */}
            <BidRegField bidRegNo={biderRegNo} />
            {/** BidPrice */}
            <PriceField 
                reserveLabel={clientTitle.bid_reserve_price_kyat}
                offerLabel={clientTitle.bid_offer_price_kyat}
                offerInWordTitle={clientTitle.bid_offer_price_word_kyat}
            />
            {/** Name/Sig */}
            <NameSig />
            {/** NRC */}
            <NrcField callback={setNrc} />
            {/** Address */}
            <AddressField />
            {/** Phone */}
            <PhoneField />
            <SubmitButton 
                fields={true}
                callBack={bidGoldBar}
            />
        </>
    );
}