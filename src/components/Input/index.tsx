import React from "react";
import { Submit, Text } from "./styles";

export default function Input({id, type, placeholder = ''}){
        if (type === "submit") return <Submit type='submit' id={id} />
        return <Text type={type} placeholder={placeholder} id={id}/>
}
