import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Image from "next/image";
import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Link} from '../Link';
import DownloadImg from '../Download/downloadicon.svg';


const About = styled.div`
    
    position: absolute;
    width: 250px;
    height: 41px;
    border-radius: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(100vh - 75px);
    margin-left: calc(100vw - 280px);

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

    :hover{
        transform: scale(1.05);
        background: rgba(162, 162, 162, 0.5);
    }
`;


export default function Name(props: any){

    return(
        <About>
            arslanbek zhaparov
        </About>
        );

    }