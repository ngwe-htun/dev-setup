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

const BidGem = ({bidder=null}) => {
    
    const navigate = useNavigate();

    // States
    const [address, setAddress] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [bidedInfo, setBidedInfo] = useState(null);
    
    useEffect(() => {
        // if(!bidder) {navigate('/'); }  else {
        //     setShowForm(true);
        // }
    }, []);

    useEffect(()=>{
        console.log(address)
    }, [address])

    // Submit
    const submitBid = () => {
        console.log('bid')
        setBidedInfo('hello')
        setShowForm(false);
    }

    const bided = () => {
        return (
            <>
                <BidDetail />
            </>
        );
    }

    // Detail form
    const detailForm = () => {
       return (
            <>
                <LotNoField lotNo={'112233'}/>
                <BidRegField bidRegNo={'112233'} />
                <PriceField 
                    offerLabel={clientTitle.bid_reserve_price_kyat}
                    reserveLabel={clientTitle.bid_reserve_price_kyat}
                    offerInWordTitle={clientTitle.bid_offer_price_word_kyat}
                />
                <NameSig />
                <NrcField />
                <AddressField 
                    setAddress={setAddress}
                />
                <PhoneField />
                <RemindField 
                    remindText={clientTitle.bid_remind_text}
                />
                <SubmitButton 
                    fields={(address)}
                    callBack={submitBid}
                />
            </>
        );
    }

    return (
        <>
            <BidDetail />
           {/* {showForm ? detailForm() : null}
           {bidedInfo ? bided() : null} */}
        </>
    );
}

export default BidGem;