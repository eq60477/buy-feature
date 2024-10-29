import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ProvinceSelect from "@ui/molecules/ProvinceSelect/ProvinceSelect.tsx";
import InputFormField from "@ui/molecules/InputFormField/InputFormField.tsx";
import {useTranslation} from "react-i18next";
import {Translation} from "@customTypes/i18n.type.ts";

export interface AddressProps {
    formType: string;
}

const AddressForm: React.FC<AddressProps> = ({formType}) => {
    const { t } : { t: Translation }= useTranslation();
    return (<div>
        <InputFormField placeholder={ t('newCustomerForm.fields.streetNumber.placeholder')} name={formType + "streetNumber"}>{t("newCustomerForm.fields.streetNumber.label")}</InputFormField>
        <InputFormField placeholder={ t("newCustomerForm.fields.streetName.placeholder")} name={formType + "streetName"}>{t("newCustomerForm.fields.streetName.label")}</InputFormField>
        <InputFormField name={formType + "apartment"}>{t("newCustomerForm.fields.apartment.label")}</InputFormField>
        <InputFormField placeholder={t("newCustomerForm.fields.city.placeholder")} name={formType + "city"}>{t("newCustomerForm.fields.city.label")}</InputFormField>
        <InputFormField placeholder={t("newCustomerForm.fields.postalCode.placeholder")} name={formType + "postalCode"}>{t("newCustomerForm.fields.postalCode.label")}</InputFormField>
        <ProvinceSelect key={formType+"province-select"} name={formType + "province"}>{t("newCustomerForm.fields.province.label")}</ProvinceSelect>
    </div>)
}

export default AddressForm;