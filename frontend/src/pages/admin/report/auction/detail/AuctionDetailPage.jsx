import { Card } from "primereact/card";
import { Title } from "../../../../../config/title";
import { Divider } from "primereact/divider";

const AuctionDetailPage = () => {
    return (
        <>
          <Card className="pl-7 pr-7" style={{background: "#D7FFF1"}}>
            {/** Title */}
            <div className="grid ">
                <div className="col text-center">
                  <img src="/logo.png" alt="logo" height={112} width={102} />
                </div>
                <div className="col text-center line-height-2">
                  <h3>{Title.report_non_auction_detail_mm_title}</h3>
                  <h4>{Title.report_non_auction_detail_en_title}</h4>
                  <h3>{Title.report_auction_detail_gold_order_title}</h3>
                </div>
                <div className="col text-center">
                  <img src="/logo.png"  alt="logo" height={112} width={102} />
                </div>
              </div>
              <Divider />

              {/** Body */}
              <div className="grid">
                <div className="col">
                    <div className="flex">
                      <div className="w-14rem">
                            <p>Reserved Price [Kyats] </p>
                            <p>(အခြေခံဈေးနှုန်း [ကျပ်])</p>
                          </div>
                          <div className="mt-auto mb-auto text-left">
                            <h2>: 100000</h2>
                          </div>
                    </div>
                    <div className="flex">
                          <div className="w-14rem">
                          <p>Offered Price [Kyats] </p>
                          <p>(အဆိုပြုစျေးနှုန်း [ကျပ်])</p>
                          </div>
                          <div className=" mt-auto mb-auto text-left">

                            <h2>: 100000</h2>
                        </div>
                    </div>

                    <div className="flex w-29rem">
                        <div>
                            <p>Offered Price [Kyats] - in words</p>
                            <p>(အဆိုပြုစျေးနှုန်း [ကျပ်]) - စာသားဖြင့်</p>
                        </div>
                        <div className=" mt-auto mb-auto text-left">
                            <h2>: 100000</h2>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="grid">
                <div className="col"></div>
                <div className="col">
                    <div className="grid">
                        <div className="col text-right">
                            <p>Signature (လက်မှတ်) :</p>
                            <p>Name (အမည်) :</p>
                            <p>NRC (နိုင်ငံသားစိစစ်ရေးကတ်အမှတ်) :</p>
                            <p>Address (လိပ်စာ) :</p>
                            <p>Phone (ဆက်သွယ်ရမည့်ဖုန်း) :</p>
                        </div>
                        <div className="col text-left">
                            <p>Aung Aung</p>
                            <p>Aung Aung</p>
                            <p>12/AABBCC (C) 000000</p>
                            <p>No.123, 12th Street, Example Township, 1 ward, Yangon City, Yangon, Myanmar.</p>
                            <p>095013591</p>
                        </div>
                    </div>
                </div>
              </div>

              <Divider />
              <div className="text-center text-red-600">
                <p>* This form is not permitted to transfer. It is your responsibility for the data on this bidding form.</p>
                <p>(စျေးနှုန်းတင်သွင်းလွှာအား လွှဲပြောင်းခွင့်မပြု။ မိမိရေးသားချက်အပေါ် တာဝန်ယူရမည်။)</p>
              </div>
          </Card>
        </>
    );
}

export default AuctionDetailPage;