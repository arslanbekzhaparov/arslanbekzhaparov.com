import React, { forwardRef } from "react";
import styled, { css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Row from '../Row';
import NextImg from '../Card/next.svg';
import {PEAK_HEIGHT} from '../Navbar';
import Image from "next/image";

const CardDiv = styled.div`

    margin-top: 194px;
    position: absolute;
    display: flex;
    flex-direction: row;
    // background-color: green;
    justify-content: center;
    width: 100%;
    height: 330px;
`
const CardCanvas = styled.div`
    
    // position: relative;
    max-width: 744px;
    width: 100%;
    min-width: 744px;
    height: 100%;
    margin-right: 37px;
    margin-left: 37px;
    display: flex;
    flex-direction: row;

    // background-color: black;
    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);

    border-radius: 50px;
`;

const NextRight = styled.div`
    
    // position: relative;
    width: 176px;
    min-width: 86px;
    height: 100%;
    margin-left: 60px;

    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NextLeft = styled.div`

    // position: absolute;
    width: 176px;
    min-width: 86px;
    height: 100%;
    margin-right: 60px;
    

    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: scale(-1);
`;

const CardImageContainer = styled.div`
    
    position: relative;
    width: 284.46px;
    height: 275.41px;
    margin: 27.13px;

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 22px;
`

const LetterRectangle = styled.div`
    
    position: relative;
    width: 49.33px;
    height: 49.33px;
    margin-top: 27.13px;

    background: #000000;
    border-radius: 17px;
`
const PrimaryText = styled.div`
    
    position: absolute;
    width: 271px;
    height: 48px;
    margin-left: 10px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #FFFFFF;

`;

export default function Card(props: any){

    return(
        <CardDiv>
        <NextRight>
            <Image src={NextImg} alt="NextRight"/>
        </NextRight>
        <CardCanvas>
            <CardImageContainer>
            </CardImageContainer>
            <LetterRectangle>
                <PrimaryText>
                    HAPPYHEBEE
                </PrimaryText>
            </LetterRectangle>
        </CardCanvas>
        <NextLeft>
            <Image src={NextImg} alt="NextLeft"/>
        </NextLeft>
        </CardDiv>
    );
}