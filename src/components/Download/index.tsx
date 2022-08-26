import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Image from "next/image";
import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Link} from '../Link';
import DownloadImg from '../Download/downloadicon.svg';


const DownloadIcon = styled.div`
    
    position: fixed;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-top: calc(100vh - 70px);
    margin-left: 30px;
    
    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    
    :hover{
        transform: scale(1.05);
        background: rgba(162, 162, 162, 0.5);
    }
    :active {
		transform: scale(0.95);
        background: rgba(0, 0, 0, 0.5);
    }
`;



export default function Download(props: any){

    return(
        <DownloadIcon>
            <Image src = {DownloadImg}></Image>
        </DownloadIcon>
        );

    }