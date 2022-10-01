import type { NextPage } from 'next'
import ReactPlayer from 'react-player'
import { device } from '../styles'

import Head from 'next/head'
import Image from 'next/image'
import React, { forwardRef } from "react";
import styled, { keyframes, css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import Row from '../components/Row';
import Column from '../components/Column';
import Logo from '../components/Logo';
import Link from 'next/link'
import {Linking} from '../components/Link';

import NextImg from '@images/next.svg';
import GithubLogo from'@images/githublogo.svg';
import HappyhebeeImg from '@images/happyhebeefigure.svg';
import Icon from "../components/Logo";


import BackgroundIMG from '@images/background.svg'
import Navbar, {PEAK_HEIGHT}  from "../components/Navbar";
import Download from "../components/Download";
import Name from "../components/Name";

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

    @media ${device.laptop} {
    }

    @media ${device.tablet} {
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media ${device.mobileL} {
        flex-direction: column;
    }

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

    @media ${device.laptop} {
        min-width: 550px;
        max-width: 550px;
        margin-right: 20px;
        margin-left: 20px;
        border-radius: 40px;
        height: 266.53px; 
    }

    @media ${device.tablet} {
        min-width: 400px;
        max-width: 400px;
        border-radius: 35px;
        margin-right: 20px;
        margin-left: 20px;
    }

    @media ${device.mobileL} {
        min-width: 260px;
        max-width: 260px;
        border-radius: 30px;
        margin-right: 20px;
        margin-left: 20px;
    }

    // position: fixed;
    min-width: 744px;
    max-width: 744px;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    margin-right: 37px;
    margin-left: 37px;
    display: flex;
    flex-direction: row;

    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s

`;

const NextRight = styled.div`
    
    @media ${device.laptop} {
        height: 266.53px; 
    }

    @media ${device.tablet} {
        width: 300px;
        margin-bottom: 30px;
        margin-right: 60px;
        padding: 10px;
        
    }
    @media ${device.mobileL}  {
        min-width: 260px;
        max-width: 260px;
    }


    // position: relative;
    width: 176px;
    min-width: 86px;
    height: 100%;
    margin-left: 60px;
    border-radius: 50px;

    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */
    
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

    @media ${device.laptop} {
        height: 266.53px; 
    }

    @media ${device.tablet} {
        width: 300px;
        margin-top: 30px;
        margin-left: 60px;
        min-height: 62px;
    }

    @media ${device.mobileL}  {
        min-width: 260px;
        max-width: 260px;
    }

    // position: absolute;
    width: 176px;
    min-width: 86px;
    height: 100%;
    margin-right: 60px;
    
    border-radius: 50px;

    background: rgba(162, 162, 162, 0.2);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

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
    
    @media ${device.laptop} {
        width: 229.97px;
        height: 222.66px;
        margin: 20px;

        transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;
        background: linear-gradient(-45deg, #AEBFF2, #fff , #292E49);
        background-size: 400% 400%;
        animation: ${pulse} 5000ms ease infinite;
        :hover {
            transform: scale(1.05);
            animation-play-state: paused;
        }
        :active {
            transform: scale(0.95);
            background: rgba(0, 0, 0, 0.5);
        }
    }

    @media ${device.tablet} {
        margin: 15px;
    }

    position: relative;
    width: 284.46px;
    height: 275.41px;
    margin: 27.13px;

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 22px;
`

const VideoContainer = styled.div`
    
    @media ${device.laptop} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.mobileL}  {
        display: none;
    }


    position: absolute;
    width: 234px;
    height: 119px;
    margin-left: 339px;
    margin-top: 105px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(5, 5, 5, 0.2);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
`

const LetterRectangle = styled.div`
    
    @media ${device.laptop} {
        width: 39.88px;
        height: 39.88px;
        border-radius: 15px;
    }

    @media ${device.tablet} {
        width: 26.12px;
        height: 26.12px;
        border-radius: 10px;
    }

    @media ${device.mobileL}  {
        display: none;
    }


    position: relative;
    width: 49.33px;
    height: 49.33px;
    margin-top: 27.13px;

    background: #000000;
    border-radius: 17px;
`
const PrimaryText = styled.div`
    
    @media ${device.laptop} {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        margin-top: 0.3px;

    }

    @media ${device.tablet} {
        font-weight: 700;
        font-size: 17px;
        line-height: 24px;;
        position: relative;
        margin-left: 5.8px;
        margin-top: 0.7px;

    }

    @media ${device.mobileL}  {
        display: none;
    }


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
    
    @media ${device.laptop} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.mobileL}  {
        display: none;
    }


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


    @media ${device.laptop} {
        max-width: 250px;
        height: 115px;
        margin-top: 80px;
        margin-left: 272px;
        font-size: 24px;
        line-height: 25px;
    }

    @media ${device.tablet}  {
        max-width: 120px;
        height: 115px;
        margin-top: 60px;
        margin-left: 260px;
        font-size: 14px;
        line-height: 20px;
    }

    @media ${device.mobileL}  {
        display: none;
    }


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

    @media ${device.laptop} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.mobileL} {
        display: none;
    }

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
    background: linear-gradient(-45deg, #AEBFF2, #fff , #292E49);
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

const BackgroundCanvas = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    
    overflow: hidden;
    z-index: -1;
`

const Home: NextPage = () => {
  return (
    <div>
        <Head>
            <title>Arslanbek Zhaparov</title>
            <meta name="description" content="Welcome to my portfolio!"/>

            <meta property="og:url" content="https://portfoliowebsite-beryl.vercel.app/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Arslanbek Zhaparov"/>
            <meta property="og:description" content="Welcome to my portfolio!"/>
            <meta property="og:image" content="https://raw.githubusercontent.com/arslanbekzhaparov/arslanbekzhaparov.com/614506dbddbf69712d1b151d3c32279a750cc231/public/images/preview.svg"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content="portfoliowebsite-beryl.vercel.app"/>
            <meta property="twitter:url" content="https://portfoliowebsite-beryl.vercel.app/"/>
            <meta name="twitter:title" content="Arslanbek Zhaparov"/>
            <meta name="twitter:description" content="Welcome to my portfolio!"/>
            <meta name="twitter:image" content="https://raw.githubusercontent.com/arslanbekzhaparov/arslanbekzhaparov.com/614506dbddbf69712d1b151d3c32279a750cc231/public/images/preview.svg"/>
        </Head>

      <Navbar>
      </Navbar>
      <CardDiv>
      <Link href="/covid">
        <NextRight>
            <Image src={NextImg} alt="NextRight"/>
        </NextRight>
        </Link>
        <CardCanvas>
        <Linking href={"https://github.com/arslanbekzhaparov/portfoliowebsite"} disableHoverOpacity>
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
            </Linking>
            <LetterRectangle>
                <PrimaryText>
                    HAPPYHEBEE
                </PrimaryText>
            </LetterRectangle>
            <YearBlock>
                    2022
            </YearBlock>
            <VideoContainer>
                <ReactPlayer 
                url='https://youtu.be/wLRQso54ZoQ'
                />
            </VideoContainer>
            <Linking href={"https://github.com/arslanbekzhaparov/portfoliowebsite"} disableHoverOpacity>
                <GithubButton>
                    <Image src={GithubLogo} alt={GithubLogo} width="80%" height="80%"/>
                </GithubButton>
            </Linking>
            <Description>
            happyhebee is an avatar that manages this website. happyhebee loves to play sports, games and make music.
            </Description>
        </CardCanvas>
        <Link href="/smartars">
        <NextLeft>
            <Image 
            src={NextImg} 
            alt="NextLeft"
            
              />
        </NextLeft>
        </Link>
        </CardDiv>
        <FooterDiv>
                <ContactMe href={"mailto:arslanbekzhaparov@gmail.com"}>
                    CONTACT ME
                </ContactMe>
        </FooterDiv>
        <Linking href="https://drive.google.com/file/d/15xXFfBQVbw2ARR4nDYoz3Iam44M-wZSh/view?usp=sharing" disableHoverOpacity>
        <Download>
        </Download>
        </Linking>
        <Linking href="https://drive.google.com/file/d/15xXFfBQVbw2ARR4nDYoz3Iam44M-wZSh/view?usp=sharing" disableHoverOpacity>
        <Name></Name>
        </Linking>
        <BackgroundCanvas>
            <Image src = {BackgroundIMG} background-size="cover" layout="fill" objectFit="cover"></Image>
        </BackgroundCanvas>
    </div>
  )
}

export default Home
