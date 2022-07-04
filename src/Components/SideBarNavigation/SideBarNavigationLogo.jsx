import React from "react";
import styled from "styled-components";

const LogoText = styled.h4`
    font-family: 'Anton', sans-serif;
    font-size: 20px;
`


function SideBarNavigationLogo() {
    return (
        <div>
            <LogoText>
            DeFi Dashboard
            </LogoText>
        </div>
    )
}

export default SideBarNavigationLogo;