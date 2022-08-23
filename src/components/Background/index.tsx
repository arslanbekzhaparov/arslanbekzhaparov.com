import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

import Image from "next/image";
import BackgroundIMG from '../Background/background.svg'
import {keyframes} from 'styled-components';

const BackgroundCanvas = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    
    overflow: hidden;
    z-index: -1;
`

export default function Background(props: any){
    
    return(
        <BackgroundCanvas>
            <Image src = {BackgroundIMG} background-size="cover" layout="responsive" min-width="100vw" min-height="100vh"></Image>
        </BackgroundCanvas>
    );
}