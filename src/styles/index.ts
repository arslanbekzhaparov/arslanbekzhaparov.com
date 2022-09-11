import styled, { css } from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '414px',
    tablet: '820px',
    laptopS: '1024px',
  };

  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptopS})`,
  };