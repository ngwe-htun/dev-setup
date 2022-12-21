import AppBar from "../../../components/client/appbar/AppBar";
import BiderCheckInput from "../../../components/client/biderInput/biderInput";
import { clientTitle } from "../../../config/clientTitles";

export const PureGold = () => {
    return (
        <>
            <AppBar 
                titleMm={clientTitle.pure_gold_appbar_title_mm}
                titleEng={clientTitle.pure_gold_appbar_title_en}
            />
            <BiderCheckInput />
        </>
    );
}