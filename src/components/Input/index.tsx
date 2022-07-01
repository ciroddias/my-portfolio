import React from "react";
import { Submit, Text } from "./styles";

export default function Input({type, placeholder = ''}){
        if (type === "submit") return <Submit type='submit' />
        return <Text type={type} placeholder={placeholder} />
}
