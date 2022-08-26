import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Link} from '../Link';


const pulse = keyframes`
    0% { 
        background-position: 0% 50%;
    }
    50% { 
        background-position: 100% 50%;
    }
    100% { 
        background-position: 0% 50%;
    }
`;

const FooterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    margin-top: calc(194px + 330px);
    position: fixed;
    display: flex;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
`;

const ContactMe = styled.a`
    
    width: 213.63px;
    max-height: 53px;
    margin-top: 115px;

    position: relative;
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    border-radius: 40.5px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    background: linear-gradient(-45deg, #076585, #fff , #292E49);
    background-size: 400% 400%;
    animation: ${pulse} 8000ms ease infinite;
    height: 100vh;
    
    :hover{
        transform: scale(1.05);
        animation-play-state: paused;
    }
    :active {
		transform: scale(0.95);
        background: rgba(0, 0, 0, 0.5);
    }
`;

export default function Footer(props: any){

    return(
        <FooterDiv>
                <ContactMe href={"mailto:arslanbekzhaparov@gmail.com"}>
                    CONTACT ME
                </ContactMe>
        </FooterDiv>
        );

    }