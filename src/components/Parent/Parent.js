import React from "react"
import styled from "styled-components";
import './parent.css'
import Child from "../Child/Child"

const ParentText = styled.div`
color : ${({theme}) => theme.textColor}
`

export default function Parent(props) {
    return (
        <div>
            <ParentText>I am the <code className={"specialText"}>&lt;Parent/&gt;</code> component, i can change my color.</ParentText>
            <Child />
        </div>
    )
}