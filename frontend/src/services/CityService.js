import { Config } from "../config/app"

export const getCityList = () => {
    const url = `${Config.admin_host}/cities`;
    try {
        return [
            { "name_en": "yangon"},
            { "name_en": "Mandalay"}
        ]
    } catch (err) {}
}