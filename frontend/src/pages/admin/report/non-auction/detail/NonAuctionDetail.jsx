import { Card } from "primereact/card";
import { Title } from "../../../../../config/title";
import { Divider } from 'primereact/divider';

const NonAuctionDetailPage = (props) => {
    console.log(props);
    return (
        <>
            <Card className="w-full mt-5">
              {/** Title */}
              <div className="grid ">
                <div className="col text-center">
                  <img src="/logo.png" alt="logo" height={112} width={102} />
                </div>
                <div className="col text-center line-height-2">
                  <h3>{Title.report_non_auction_detail_mm_title}</h3>
                  <h4>{Title.report_non_auction_detail_en_title}</h4>
                  <h3>{Title.report_non_auction_detail_gold_coin_order_title}</h3>
                </div>
                <div className="col text-center">
                  <img src="/logo.png"  alt="logo" height={112} width={102} />
                </div>
              </div>
              <Divider />

              {/**Body */}
              <div className="grid">
                <div className="col text-right">
                    <p>Gold Coin Type (ရွှေဒင်္ဂါးပြား အမျိုးအစား) :</p>
                    <p>Name (အမည်) :</p>
                    <p>Father’s Name (အဘအမည်) :</p>
                    <p>NRC (နိုင်ငံသားစိစစ်ရေးကတ်အမှတ်) :</p>
                    <p>Job (အလုပ်အကိုင်) :</p>
                    <p>Address (နေရပ်လိပ်စာ) :</p>
                    <p>Phone (ဆက်သွယ်ရမည့်ဖုန်း) :</p>
                    <p>City (ဝယ်ယူလိုသည့်မြို့) :</p>
                    <p>Reason to Buy (ဝယ်ယူရခြင်းအကြောင်း) :</p>
                    <p>Reason to Buy (ဝယ်ယူရခြင်းအကြောင်း) :</p>
                    <Divider />
                    <p>Did you buy the gold coin before? (ယခင်က ရွှေဒင်္ဂါးပြားဝယ်ယူခဲ့ဖူးခြင်း ရှိ/မရ) :</p>
                    <p>Do you promise not to be Liquidation or Reselling the Gold Coin? (အရည်ကြိုခြင်း/ ပြန်လည်ရောင်းချခြင်း (လုံးဝ) မပြုကြောင်း ကတိဝန်ခံချက် ပြုလို/မပြုလို) :</p>
                </div>
                <div className="col text-left">
                    <p>၁ ကျပ်သား</p>
                    <p>Aung Aung</p>
                </div>
              </div>
              <Divider />
              <div className="grid">
                <div className="col text-center text-red-600">
                * This form is not permitted to transfer. It is your responsibility for the data on this bidding form.(စျေးနှုန်းတင်သွင်းလွှာအား လွှဲပြောင်းခွင့်မပြု။ မိမိရေးသားချက်အပေါ် တာဝန်ယူရမည်။)
                </div>
              </div>
            </Card>
        </>
    );
}

export default NonAuctionDetailPage;