import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Link} from '../Link';

import NextImg from '../Card/next.svg';
import GithubLogo from'../Card/githublogo.svg';
import HappyhebeeImg from '../Card/happyhebeefigure.svg';
import {PEAK_HEIGHT} from '../Navbar';
import Image from "next/image";
import Icon from "../Logo";


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


const CardDiv = styled.div`

    position: fixed;
    margin-top: 194px;
    display: flex;
    flex-direction: row;
    // background-color: green;
    justify-content: center;
    width: 100%;
    height: 330px;
`
const CardCanvas = styled.div`
    
    // position: fixed;
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
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;

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
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;

    :hover {
		transform: scale(1.05);
        background: rgba(162, 162, 162, 0.5);
	}
    :active {
		transform: scale(0.95);
        background: rgba(0, 0, 0, 0.5);
	}
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
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;

    transform: scale(-1);
    
    :hover {
		transform: scale(-1.05);
        background: rgba(162, 162, 162, 0.5);
	}
    :active {
		transform: scale(-0.95);
        background: rgba(0, 0, 0, 0.5);
	}
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


const YearBlock = styled.div`
    
    position: absolute;
    width: 55.08px;
    height: 29.6px;

    margin-top: 35px;
    margin-left: 655px;

    background: linear-gradient(-45deg, #F8878D, #4776E6, #8E54E9);
    background-size: 400% 400%;
    animation: ${pulse} 10000ms ease infinite;
    border-radius: 48px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Description=styled.div`

    position: absolute;
    width: 100%px;
    height: 115px;
    margin-top: 240px;
    margin-left: 340px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: white;
`;

const GithubButton=styled.div`

    position: absolute;
    width: 100px;
    height:100px;
    margin-top: 0px;
    margin-left: 500px;

    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;
    background: linear-gradient(-45deg, #E6DADA, #274046, #85A9EE);
    background-size: 400% 400%;
    animation: ${pulse} 5000ms ease infinite;
    
    :hover {
		transform: scale(1.05);
        animation-play-state: paused;
	}
    :active {
		transform: scale(0.95);
        background: rgba(0, 0, 0, 0.5);
`;



export default function Card(props: any){

    return(
        <CardDiv>
        <NextRight>
            <Image src={NextImg} alt="NextRight"/>
        </NextRight>
        <CardCanvas>
            <CardImageContainer>
            <Image
                src={HappyhebeeImg}
                alt={"Happyhebee Figure"}
                layout="responsive"
                width="100%"
                height="95%"
                objectFit="contain"
			/>
            </CardImageContainer>
            <LetterRectangle>
                <PrimaryText>
                    HAPPYHEBEE
                </PrimaryText>
            </LetterRectangle>
            <YearBlock>
                    2022
            </YearBlock>
            <Link href={"https://github.com/arslanbekzhaparov/portfoliowebsite"} disableHoverOpacity>
                <GithubButton>
                    <Image src={GithubLogo} alt={GithubLogo} width="80%" height="80%"/>
                </GithubButton>
            </Link>
            <Description>
            happyhebee is avatar that manages this websie. happyhebee loves to play sports, games and make music.
            </Description>
        </CardCanvas>
        <NextLeft>
            <Image src={NextImg} alt="NextLeft"/>
        </NextLeft>
        </CardDiv>
    );
}