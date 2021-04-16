import React from "react"
import styled from "styled-components";
import { theme } from "../../themes";
import "./child.css"



const ChildText = styled.div`
color : ${({theme}) => theme.textColor}
`

export default function Child (props){
    return (
        <div>
            <ChildText>I am the <code className={"specialText"}>&lt;Child/&gt;</code> component, i can change my color <u>TOO !</u></ChildText>
        </div>
    )
}