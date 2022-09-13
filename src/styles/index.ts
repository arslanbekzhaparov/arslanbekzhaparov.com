import styled, { css } from "styled-components";

const size = {
    mobileM: '375px',
    mobileL: '400px',
    tablet: '820px',
    tabletL: '1024px',
    laptopS: '1024px',
  };

  export const device = {
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletL: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptopS})`,
  };