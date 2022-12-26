import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { clientTitle } from "../../../../config/clientTitles";
import { ClientBack } from "../../../../components/client/back/back";
import { RemindField } from "../../../../components/client/remind/remind";
import { PriceField } from "../../../../components/client/bid/price/price";
import { SubmitButton } from "../../../../components/client/submit/submit";
import { NameSig } from "../../../../components/client/bid/nameSig/nameSig";
import { LotNoField } from "../../../../components/client/bid/lotNo/lotField";
import { BidRegField } from "../../../../components/client/bid/bidReg/bidRegField";
import { TwoShowField } from "../../../../components/client/common/twoshow/twoShow";
import { auctionBid } from "../../../../services/ClientService";
import { AlertDialog } from "../../../../components/alert/Alert";

// BID JADE
export const BidJade = () => {

    // Constants
    const nav = useNavigate();
    const bider = useOutletContext()?.bider;
    const lotInfo = useOutletContext()?.lotInfo;
    const categoryId = useOutletContext()?.categoryId;

    // States
    const [showFailed, setShowFailed] = useState({
        "show": false,
        "message": ""
    });
    const [offerPrice, setOfferPrice] = useState('');
    const [offerPriceInWord, setOfferPriceInWord] = useState('');

    // BID JADE
    const bidJade = async () => {
        try {
            let res = await auctionBid({
                "bider_id": bider.id,
                "item_id": lotInfo.id,
                "price": offerPrice
            });
            navigateToDetail();
        } catch (err) {
            setShowFailed({
                "show": true,
                "message": err.message
            });
        }
    }

    // Navigate to detail
    const navigateToDetail = () => {
        let orderInfo = {
            "auction": {
                "reserve": lotInfo.base_price,
                "offer": offerPrice,
                "offerInWord": offerPriceInWord,
                "is_euro": true
            }
        };
        nav('/jade/bid/detail', {
            "state": {
                "orderInfo": orderInfo,
                "bider": bider,
                "lotInfo": lotInfo
            }
        });
    }
    
    // RENDER
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
            <LotNoField lotInfo={lotInfo}/>
            <BidRegField bidRegNo={bider.bider_reg_number} />
            <PriceField
                reserve={{
                    "label": clientTitle.bid_reserve_price_euro,
                    "data": lotInfo.base_price
                }}
                offer={{
                    "label": clientTitle.bid_offer_price_euro,
                    "callback": setOfferPrice
                }}
                offerInWord={{
                    "label": clientTitle.bid_offer_price_word_euro,
                    "callback": setOfferPriceInWord
                }}
            />
            <NameSig data={bider.name}/>
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
            <RemindField 
                remindText={clientTitle.bid_remind_text}
            />
            <SubmitButton 
                fields={(offerPrice && offerPriceInWord)}
                callBack={bidJade}
            />

            {/** Alert failed */}
            {showFailed.show ? <AlertDialog info={showFailed} callBack={setShowFailed} />: null}
        </>
    );
}