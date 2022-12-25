import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Col, Container, Row } from "react-bootstrap";
import { BidDetail } from "../../detail/bid/detail";

const BidGem = ({regNo, lotNo}) => {
    
    const navigate = useNavigate();

    // States
    const [nrc, setNrc] = useState("");
    const [address, setAddress] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [bidedInfo, setBidedInfo] = useState(null);
    
    return (
        <>
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

export default BidGem;