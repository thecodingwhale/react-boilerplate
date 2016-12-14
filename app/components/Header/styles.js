import styled, { css } from 'styled-components';

/**
 * styles
 */
function styles() {
  return css`
    font-family: 'Bree Serif', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: .09em;
    font-size: 2em;
  `;
}

export const Wrapper = styled.h1`
  ${styles}
`;
