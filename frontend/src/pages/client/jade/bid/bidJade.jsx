import { useState } from "react";
import { clientTitle } from "../../../../config/clientTitles";
import { PriceField } from "../../../../components/client/bid/price/price";
import { LotNoField } from "../../../../components/client/bid/lotNo/lotField";
import { BidRegField } from "../../../../components/client/bid/bidReg/bidRegField";
import { NameSig } from "../../../../components/client/bid/nameSig/nameSig";
import { NrcField } from "../../../../components/client/nrc/nrc";
import { AddressField } from "../../../../components/client/address/address";
import { PhoneField } from "../../../../components/client/phone/phone";
import { RemindField } from "../../../../components/client/remind/remind";
import { SubmitButton } from "../../../../components/client/submit/submit";
import { ClientBack } from "../../../../components/client/back/back";

// BID JADE
export const BidJade = ({regNo, lotNo}) => {

    const [nrc, setNrc] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
            <ClientBack 
                label={{
                    "en": clientTitle.jade_appbar_title_en,
                    "mm": clientTitle.jade_appbar_title_mm
                }}
                path={"/"}
            />
            <RemindField remindText={clientTitle.write_in_english} />
            <LotNoField lotNo={lotNo}/>
            <BidRegField bidRegNo={regNo} />
            <PriceField 
                offerLabel={clientTitle.bid_offer_price_euro}
                reserveLabel={clientTitle.bid_reserve_price_euro}
                offerInWordTitle={clientTitle.bid_offer_price_word_euro}
            />
            <NameSig />
            <NrcField callback={setNrc}/>
            <AddressField 
                setAddress={setAddress}
            />
            <PhoneField />
            <RemindField 
                remindText={clientTitle.bid_remind_text}
            />
            <SubmitButton 
                fields={(address)}
            />
        </>
    );
}