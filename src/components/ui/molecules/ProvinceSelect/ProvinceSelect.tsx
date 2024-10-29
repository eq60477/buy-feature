import Select from "@ui/molecules/Select";
import React from "react";
import {useTranslation} from "react-i18next";
import {Translation} from "@customTypes/i18n.type.ts";

interface ProvinceSelectProps {
    children: React.ReactNode
    name: string;
}

const ProvinceSelect: React.FC<ProvinceSelectProps> = ({children, name}) => {
    const { t } : { t: Translation }= useTranslation();
    const provinceCode = ["AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT"];
    const provinces: {label: string, value: string}[] = []
    provinceCode.map((code) => {
        provinces.push({label: t("provinces." + code), value: code});
    })

    return (
        <div className="InputFormField">
            <label htmlFor={name}>{children}</label>
            <div>
                <Select name={name} items={provinces}></Select>
            </div>
        </div>
    );
};

export default ProvinceSelect;