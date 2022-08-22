import Spline from '@splinetool/react-spline';
import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

const SplineContainer = styled.div`
    
    position: absolute;
    min-height: 50px;
    min-width: 50px;
    left: 915px;
    top: 43.26px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export default function App() {
    return (
        <SplineContainer>
      <Spline scene="https://prod.spline.design/VtJxBOOtZO7PLf8J/scene.splinecode" />
      </SplineContainer>
    );
  }
  

// import React, { forwardRef } from "react";
// import styled, { useTheme } from "styled-components";

// import WrappedSpline from "./WrappedSpline";


// export default function Spline(props:any){
//     return(
//         <SplineContainer>
//             <Spline></Spline>
//         </SplineContainer>
//     );
// }