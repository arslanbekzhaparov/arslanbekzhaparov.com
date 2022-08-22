import React, { forwardRef } from "react";
import styled, { css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Row from '../Row';
import Column from '../Column';
import Logo from '../Logo';
import {Link} from '../Link';

import NextImg from '../Card/next.svg';
import NextJsLogo from'../Card/nextjslogo.svg';
import FigmaLogo from'../Card/figmalogo.svg';
import ReactJsLogo from'../Card/reactjslogo.svg';
import GithubLogo from'../Card/githublogo.svg';
import SplineLogo from'../Card/splinelogo.svg';
import HappyhebeeImg from '../Card/happyhebeefigure.svg';
import {PEAK_HEIGHT} from '../Navbar';
import Image from "next/image";
import Icon from "../Logo";

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
    :hover {
		transform: scale(1.01);
	}
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

const HealthBar = styled.div`
    
    position: absolute;    
    margin-top: 93.72px;
    margin-left: 339.54px;
    width: 155.38px;
    height: 10.69px;

    background: #5C3E46;
    border-radius: 20px;

`;

const Health = styled.div`
    
    position: fixed;
    width: 106.88px;
    height: 10.69px;

    background: #51CF8B;
    border-radius: 20px;

`;

const YearBlock = styled.div`
    
    position: absolute;
    width: 55.08px;
    height: 29.6px;

    margin-top: 35px;
    margin-left: 655px;

    background: linear-gradient(113.44deg, #F8878D 3.17%, #B777E0 51.56%, #85A9EE 101.63%);
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

const Logos = styled.div`
    
    position: absolute;
    width: 155px;
    height: 32px;
    margin-top: 120px;
    margin-left: 339px;
`;

const Description=styled.div`

    position: absolute;
    width: 299px;
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
    width: 83px;
    height: 83px;
    margin-top: 210px;
    margin-left: 600px;

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
            <HealthBar>
                <Health>
                </Health>
            </HealthBar>
            <Logos>
            <Row>
                <Logo src={NextJsLogo} alt={NextJsLogo} />
                <Logo src={ReactJsLogo} alt={ReactJsLogo} />
                <Logo src={SplineLogo} alt={SplineLogo}  />
                <Logo src={FigmaLogo} alt={FigmaLogo}/>
            </Row>
            </Logos>
            <Link href={"https://github.com/arslanbekzhaparov/portfoliowebsite"} disableHoverOpacity>
                <GithubButton>
                    <Image src={GithubLogo} alt={GithubLogo}/>
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