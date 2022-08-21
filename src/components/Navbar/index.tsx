import styled, { useTheme } from "styled-components";

import Image from "next/image";
// import NavImg from './images/navbaricon.png';

const NavbarCanvas = styled.div`
    position: absolute;
    width: 100%;
    height: 165px;
    left: 0px;
    top: 0px;
    // background-color: black;
    justify-content: center;
    z-index: 999;
`;

const NavImgContainer = styled.div`

    display: block;
    width: 125px;
    height: 159px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    background: rgba(161, 161, 161, 0.2);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 0px 0px 50px 50px;
`
export default function Navbar(props: any){

    return(
        <NavbarCanvas>
            <NavImgContainer>
                {/* <Image src = {NavImg} alt = "NavImg" sizes ="48px"/> */}
            </NavImgContainer>
        </NavbarCanvas>
    );
}