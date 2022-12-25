import './order.css';
import { saveAs } from 'file-saver'
import { pdf } from "@react-pdf/renderer"
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import OrderPdf from '../../../../components/pdf/orderpdf';
import { clientTitle } from '../../../../config/clientTitles';
import { NrcField } from '../../../../components/client/nrc/nrc';
import { ClientBack } from '../../../../components/client/back/back';
import { getNrcData, order } from '../../../../services/ClientService';
import { PhoneField } from '../../../../components/client/phone/phone';
import { RemindField } from '../../../../components/client/remind/remind';
import { SubmitButton } from '../../../../components/client/submit/submit';
import { AddressField } from '../../../../components/client/address/address';
import { CheckBoxField } from '../../../../components/client/checkbox/checkbox';
import { OneInputField } from '../../../../components/client/common/oneinput/oneinput';
import { TwoInputFields } from '../../../../components/client/common/twoinput/twoInput';

// GOLD ORDER
export default function GoldOrder({itemId}) {

    // States
    const [nrc, setNrc] = useState('');
    const [job, setJob] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [reason, setReason] = useState('');
    const [income, setIncome] = useState('');
    const [address, setAddress] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [acceptTerm, setAcceptTerm] = useState(false);
    const [alreadyOrdered, setAlreadyOrdered] = useState(false);

    // Submit order
    const submitOrder = async () => {
        try {
            let data = {
                "item_id": itemId,
                "nrc": nrc,
                "buyer_name": name,
                "father_name": fatherName,
                "address": address,
                "phone": phone,
                "purchase_reason": reason,
                "monthly_income": income,
                "already_ordered": alreadyOrdered,
                "term_condition": acceptTerm
            }
            let res = await order(data);
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        {/** Back */}
        <ClientBack 
            label={{
                "en": clientTitle.gold_appbar_title_en,
                "mm": clientTitle.gold_appbar_title_mm
            }}
            path={'/'}
        />
        {/** Name/FatherName */}
        <TwoInputFields 
            firstInput={{
                "label": clientTitle.gold_order_buyer_name,
                "callback": setName
            }}
            secondInput={{
                "label": clientTitle.gold_order_father_name,
                "callback": setFatherName
            }}
        />
        {/** NRC */}
        <NrcField callback={setNrc}/>
        {/** JOB */}
        <OneInputField input={{
            "label": clientTitle.job_label,
            "callback": setJob
        }}/>
        {/** Address */}
        <AddressField setAddress={setAddress}/>
        {/** Phone */}
        <PhoneField callback={setPhone} />
        {/** Reason */}
        <OneInputField input={{
            "label": clientTitle.reason_to_buy_label,
            "callback": setReason
        }} />
        {/** Salary */}
        <OneInputField input={{
            "label": clientTitle.monthly_salary_label,
            "callback": setIncome
        }} />
        {/** Ordered? */}
        <CheckBoxField input={{
            "label": clientTitle.already_order_label,
            "yes": clientTitle.check_yes_label,
            "no": clientTitle.check_no_label,
            "callback": setAlreadyOrdered

        }} />
        {/** Agreement */}
        <CheckBoxField input={{
            "label": clientTitle.gold_order_aggrement,
            "yes": clientTitle.agree_yes_label,
            "no": clientTitle.agree_no_label,
            "callback": setAcceptTerm

        }} />
        {/** Notice */}
        <RemindField remindText={clientTitle.gold_order_remind}/>
        {/** Submit */}
        <SubmitButton 
            fields={(name && fatherName && job && income && address && phone && nrc && reason)}
            callBack={submitOrder}
        />
        </>
    );
}