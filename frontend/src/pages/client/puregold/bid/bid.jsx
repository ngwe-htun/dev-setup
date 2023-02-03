import { clientTitle } from "../../../../config/clientTitles";
import { ClientBack } from "../../../../components/client/back/back";
import { BidRegField } from "../../../../components/client/bid/bidReg/bidRegField";
import { PriceField } from "../../../../components/client/bid/price/price";
import { NameSig } from "../../../../components/client/bid/nameSig/nameSig";
import { useState } from "react";
import { SubmitButton } from "../../../../components/client/submit/submit";
import { useNavigate, useOutletContext } from "react-router-dom";
import { LotNoField } from "../../../../components/client/bid/lotNo/lotField";
import { TwoShowField } from "../../../../components/client/common/twoshow/twoShow";
import { auctionBid } from "../../../../services/ClientService";

// BID PURE GOLD
export const BidPureGold = () => {

    // Consts
    const nav = useNavigate();
    const bider = useOutletContext()?.bider;
    const lotNo = useOutletContext()?.lotInfo;
    const categoryId = useOutletContext()?.categoryId;

    // States
    const [offerPrice, setOfferPrice] = useState('');
    const [offerPriceInWord, setOfferPriceInWord] = useState('');

    // BID
    const bidGoldBar = async () => {
        try {
            let res = await auctionBid({
                "bider_id" : bider.id,
                "item_id" : lotNo.id,
                "price" : offerPrice,
                "price_text": offerPriceInWord
            });
            navigateToDetail();
        } catch(err) {
            console.log(err);
        }
    }

    // Navigate to detail
    const navigateToDetail = () => {
        let orderInfo = {
            "auction": {
                "reserve": lotNo.base_price,
                "offer": offerPrice,
                "offerInWord": offerPriceInWord,
                "is_euro": false
            }
        };
        nav('/puregold/bid/detail', {
            "state": {
                "orderInfo": orderInfo,
                "bider": bider,
                "lotInfo": lotNo
            }
        });
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
            <LotNoField lotInfo={lotNo} /> 
            {/** Readonly reg */}
            <BidRegField bidRegNo={bider.bider_reg_number} />
            {/** BidPrice */}
            <PriceField 
                reserve={{
                    "label": clientTitle.bid_reserve_price_kyat,
                    "data": lotNo.base_price
                }}
                offer={{
                    "label": clientTitle.bid_offer_price_kyat,
                    "callback": setOfferPrice
                }}
                offerInWord={{
                    "label": clientTitle.bid_offer_price_word_kyat,
                    "callback": setOfferPriceInWord
                }}
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