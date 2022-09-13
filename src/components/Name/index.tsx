import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Image from "next/image";
import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Linking} from '../Link';
import DownloadImg from '../Download/downloadicon.svg';


const About = styled.div`
    
@media (max-height: 755px) {
    width: 100%px;
    height: 40px;
    top: 50px;
    left: 20px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    z-index: 1000;
}

@media (max-width: 666px) {
    width: 100px;
    height: 50px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: center;

}


    position: fixed;
    width: 250px;
    height: 41px;
    border-radius: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    right: 20px;
    // margin-top: calc(100vh + 775px);
    // margin-left: calc(100vw - 280px);
    // margin-right: 20px;
    // margin-bottom: 20px;
    overflow: hidden;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: center;

    color: #FFFFFF;

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


export default function Name(props: any){

    return(
        <About>
            arslanbek zhaparov
        </About>
        );

    }