import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

import Spline from '../Spline'
import Image from "next/image";
import NavImg from '../Navbar/navbaricon.svg';

 export const PEAK_HEIGHT = "130px";

const NavbarCanvas = styled.div`
    position: fixed;
    width: 100%;
    height: ${PEAK_HEIGHT};
    // background-color: black;
    justify-content: center;
    z-index: 999;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const NavImgContainer = styled.div`
    
    display: block;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(161, 161, 161, 0.2);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

border-radius: 0px 0px 50px 50px;
`

// const NavName = styled.div`
    
//     position: relative;
//     width: 360px;
//     height: 44px;
//     margin-left:

//     background: rgba(162, 162, 162, 0.2);
//     backdrop-filter: blur(50px);
//     /* Note: backdrop-filter has minimal browser support */

//     border-radius: 43px;
//     font-family: 'Arial';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 32px;
//     line-height: 39px;
// `

export default function Navbar(props: any){

    return(
        <NavbarCanvas>
            {/* <NavName>
                arslanbek zhaparov
            </NavName> */}
            <NavImgContainer>
                <Spline/>
                {/* <Image 
                src={NavImg} 
                alt="Navigation Bar Image"  
                max-width="100%"
                max-height="100%"/> */}
            </NavImgContainer>
        </NavbarCanvas>
    );
}