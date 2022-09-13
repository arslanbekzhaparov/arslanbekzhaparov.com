import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Image from "next/image";
import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Linking} from '../Link';
import DownloadImg from '@images/downloadicon.svg';


const DownloadIcon = styled.div`
    
    position: fixed;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    bottom: 20px;
    left: 20px;
    // margin-bottom: 20px;
    // margin-top:calc(100vh + 775px); 
    // margin-right: calc(100vw - 90px);
    overflow: hidden;
    
    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;
    
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
        <Linking href={"https://github.com/arslanbekzhaparov/portfoliowebsite"} disableHoverOpacity>
        <DownloadIcon>
            <Image src = {DownloadImg}></Image>
        </DownloadIcon>
        </Linking>
        );

    }