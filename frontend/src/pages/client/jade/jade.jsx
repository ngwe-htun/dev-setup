import AppBar from "../../../components/client/appbar/AppBar";
import BiderCheckInput from "../../../components/client/biderInput/biderInput";
import { clientTitle } from "../../../config/clientTitles";

export const Jade = () => {
    return (
        <>
            <AppBar 
                titleMm={clientTitle.jade_appbar_title_mm}
                titleEng={clientTitle.jade_appbar_title_en}
            />
            <BiderCheckInput />
        </>
    );
}