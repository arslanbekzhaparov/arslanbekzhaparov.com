import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

import Spline from '../Spline'
import Image from "next/image";
import NavImg from '../Navbar/navbaricon.svg';

 export const PEAK_HEIGHT = "124px";

const NavbarCanvas = styled.div`
    position: fixed;
    width: 100%;
    height: ${PEAK_HEIGHT};
    // background-color: black;
    justify-content: center;
    z-index: 999;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavImgContainer = styled.div`
    
    display: block;
    width: 98px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(161, 161, 161, 0.2);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

border-radius: 0px 0px 50px 50px;
`
export default function Navbar(props: any){

    return(
        <NavbarCanvas>
            <NavImgContainer>
                {/* <Spline/> */}
                <Image 
                src={NavImg} 
                alt="Navigation Bar Image"  
                max-width="100%"
                max-height="100%"/>
            </NavImgContainer>
        </NavbarCanvas>
    );
}