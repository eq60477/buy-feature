import {TextField} from "@radix-ui/themes";
import React from "react";
import "./InputFormField.css";

export interface InputFormFieldProps {
    children: React.ReactNode;
    name: string;
    placeholder?: string;
}

const InputFormField: React.FC<InputFormFieldProps> = ({children,name,placeholder}) => {
    return (
        <div className="InputFormField">
            <label htmlFor={name}>{children}</label>
            <TextField.Root placeholder={placeholder ? placeholder : ""} name={name}>
            </TextField.Root>
        </div>
    );
}

export default InputFormField