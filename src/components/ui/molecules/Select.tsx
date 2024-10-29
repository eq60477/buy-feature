import React, {memo} from "react";
import { Select as RadixSelect } from "@radix-ui/themes";

export interface SelectItem {
    label: string;
    value: string;
}

export interface SelectProps {
    name: string;
    items: SelectItem[];
}

const Select: React.FC<SelectProps> =  ({name, items}) => {
    return (
        <>
            <RadixSelect.Root name={name} defaultValue={items[0].value} key={name+items[0].value}>
                <RadixSelect.Trigger className="SelectTrigger" aria-label={name} />
                <RadixSelect.Content className="SelectContent">
                    {items.map((item) => (
                        <RadixSelect.Item key={item.value} className="SelectItem" value={item.value}>
                            {item.label}
                        </RadixSelect.Item>
                    ))}
                </RadixSelect.Content>
            </RadixSelect.Root>
        </>
    )
};


export default memo(Select);